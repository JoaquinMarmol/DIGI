-- 1) --
select * from categorias;
-- 2) --
select CategoriaNombre, Descripcion from categorias;
-- 3)--
select * from productos;
-- 4) --
select * from productos where Discontinuado = 1;
-- 5) --
select ProductoNombre, ProveedorID  from productos where proveedorID = 8;
-- 6) --
select ProductoNombre, PrecioUnitario from productos where PrecioUnitario between 10 and 22;
-- 7) --
select * from productos where UnidadesStock > NivelReorden;
-- 8) --
select * from productos where UnidadesStock > NivelReorden && UnidadesPedidas = 0;

-- clientes --
-- 1) --
select Contacto, Compania, titulo, Pais from clientes order by pais;
-- 2) --
select compania from clientes where titulo = "Owner";
-- 3) --
select compania from clientes where Compania like 'C%';
-- facturas --
-- 1) --
select FacturaID from facturas order by FechaFactura;
-- 2) --
select FacturaID from facturas where PaisEnvio = "USA" && EnvioVia <> 3;
-- 3) --
select * from clientes where ClienteID = "GOURL";
-- 4) --
select * from facturas where EmpleadoID  = 2 or EmpleadoID  = 3 or EmpleadoID = 5 or EmpleadoID = 8 or EmpleadoID = 9;
-- parte II 1--
select ProductoNombre from productos order by PrecioUnitario desc;
-- 2 --
select ProductoNombre, PrecioUnitario from productos order by PrecioUnitario desc limit 5;
-- 3 --
select ProductoNombre from productos order by UnidadesStock desc limit 10;
-- facturaDetalle 1 --
select facturadetalle, productoID, Cantidad from facturadetalle;
-- 2 --
select facturadetalle, productoID, Cantidad from facturadetalle order by Cantidad desc;
-- 3 --
select facturadetalle, productoID, Cantidad from facturadetalle where Cantidad between 50 and 100 order by Cantidad desc;
-- 4 --
select facturaID, productoID, PrecioUnitario * cantidad as total from facturadetalle;
-- extras 1 --
select * from clientes where Pais='Brazil' OR Pais='Mexico' OR Titulo like "Sales%";
-- 2 --
select * from clientes where compania like "A%";
-- 3 --
select Ciudad, Contacto as "apellido y nombre", titulo as "puesto" from clientes where ciudad = "Madrid";
-- 4 --
select * from facturas where FacturaID between 10000 and 10500;
-- 5 --
select * from facturas where FacturaID between 10000 and 10500 or ClienteID like "B%";
-- 6 --
select * from facturas where CiudadEnvio = "Vancouver" or EnvioVia = 3;
-- 7 --
select EmpleadoID from empleados where Apellido = "Buchanan";
-- 8 --
select * from facturas where EmpleadoID = 5;
