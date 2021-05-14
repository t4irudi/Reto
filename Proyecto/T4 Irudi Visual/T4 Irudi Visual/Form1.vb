
Imports MySql.Data.MySqlClient
Public Class Form1
    Dim frmPrincipal As Principal
    Public conn As New MySqlConnection

    Public id_user As String
    Public usuario As String
    Public contr As String

    Private Sub Login_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'Al cargar la ventana nos conectamos a MySQL
        conn = conectar()
    End Sub

    Private Sub btnEntrar_Click(sender As Object, e As EventArgs) Handles btnEntrar.Click
        usuario = txtUsuario.Text
        contr = txtContraseña.Text
        'Guardamos el user y pwd y llamamos a la funcion para validarlo
        If comprobarUser(usuario, contr) Then
            'Si las credenciales son correctas cargamos la pagina principal
            frmPrincipal = New Principal
            frmPrincipal.frmLogin = Me
            Me.Hide()
            frmPrincipal.Show()
        Else
            'Si no, devolvemos mensaje de error
            MessageBox.Show("Usuario o contraseña incorrectos")
        End If
    End Sub

    'Cerramos el programa
    Private Sub btnSalir_Click(sender As Object, e As EventArgs) Handles btnSalir.Click
        Me.Close()
    End Sub

    'Funcion que comprueba que el usuario y la contraseña existan en la BBDD
    Function comprobarUser(usr As String, pwd As String) As Boolean
        'Comando para buscar en la BBDD
        Dim command As New MySqlCommand("SELECT * FROM users WHERE user LIKE '%" + usr + "%' and pwd LIKE '%" + pwd + "%'", conn)
        Dim reader As MySqlDataReader = command.ExecuteReader()

        'Si hay datos, existe
        If reader.HasRows Then
            reader.Read()
            'Sacamos el id_user que utilizaremos despues
            id_user = reader.GetString("id_user")
            reader.Close()

            Return True
        Else
            reader.Close()
            Return False
        End If
    End Function
End Class
