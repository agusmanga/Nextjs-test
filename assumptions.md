Assumptions.

En el desarrollo, opté por realizar una búsqueda solo actualizando el url pasado a swr, en vez de actualizar el url de la pagina con el search query, en el sentido de midominio.com/posts?userId=1
en la version actual el url de la pagina siempre se mantiene midominio.com/posts. Esto fue realizado con el fin de que ante la eventual perdida de conexión, no se recargue toda la pagina, dando un error general. De esta manera al perder conexión, la petición a la api da error, pero el usuario puede seguir en la pagina.