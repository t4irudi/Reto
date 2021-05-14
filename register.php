<form id="formulario" action="altaUsuario.php" method="post">
    <div id="infoWeb">
        <h2>Información para la web</h2>
        <label for="user">Usuario</label>
        <input type="text" id="user" name="user" placeholder="Escriba su usuario" /><br>
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Escriba su contraseña" /><br>
        <label for="repassword">Repita su contraseña</label>
        <input type="password" id="repassword" name="repassword" placeholder="Repita su contraseña" /><br>
        <label for="name">Nombre</label>
        <input type="name" id="name" name="name" placeholder="Escriba su nombre" /><br>
        <label for="lastname">Apellido</label>
        <input type="lastname" id="lastname" name="lastname" placeholder="Escriba su apellido" /><br>
    </div>
    <input id="enviar" type="submit" value="Enviar" />
</form>