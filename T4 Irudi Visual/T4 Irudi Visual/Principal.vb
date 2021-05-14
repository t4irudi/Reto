Imports MySql.Data.MySqlClient

Public Class Principal
    Public frmLogin As Form1
    Public frmJuego As Juego
    Public frmReglas As Reglas
    Public frmPuntuacion As Puntuacion

    Dim ingles As Boolean
    Dim max As Integer

    'Public Sub New(frmlogin As Form1)
    ' Me.frmLogin = frmlogin
    '     cargarPantalla(frmlogin.id_user)
    'End Sub

    'Al abrirse esta entana cargamos los datos del usuario
    'actualizados y rellenamos los labels con sus estadisticas
    Private Sub Principal_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'ingles = False

        'Nombre del usuario
        lblBienvenida.Text = lblBienvenida.Text + ": " + frmLogin.usuario
        'Cargar los datos
        cargarPantalla(frmLogin.id_user)
    End Sub

    'Cargamos la ventana de las reglas
    Private Sub btnReglas_Click(sender As Object, e As EventArgs) Handles btnReglas.Click
        frmReglas = New Reglas
        frmReglas.frmPrincipal = Me
        Me.Hide()
        frmReglas.Show()
    End Sub

    'Dependiendo de que modalidad se elija cargamos unas preguntas o otras
    'Esto lo hacemos controlando la variable booleana INGLES
    Private Sub btnJugar_Click(sender As Object, e As EventArgs) Handles btnJugar.Click
        'Comprobamos que modalidad se ha seleccionado
        If rb1.Checked Then
            ingles = False
        Else
            ingles = True
        End If


        frmJuego = New Juego
        'frmPuntuacion = New Puntuacion
        'frmPuntuacion = New Puntuacion
        frmJuego.frmPrincipal = Me
        'frmPuntuacion.frmJuego.frmPrincipal = Me

        Me.Hide()
        frmJuego.Show()

    End Sub

    'Volvemos al login
    Private Sub btnVolver_Click(sender As Object, e As EventArgs) Handles btnVolver.Click
        frmLogin = New Form1
        frmLogin.Show()
        Me.Close()

    End Sub

    'Funcion para cargar en pantalla los datos del usuario desde la BBDD
    Function cargarPantalla(usr As String)
        'obtener el numero de partidas
        Dim command As New MySqlCommand("SELECT COUNT(*) FROM partidas WHERE id_user LIKE '%" + usr + "%'", frmLogin.conn)
        Dim reader As MySqlDataReader = command.ExecuteReader()
        reader.Read()
        lbl1.Text = reader.GetInt32(0).ToString
        reader.Close()

        'obtener la puntuacion maxima
        command = New MySqlCommand("SELECT MAX(puntuacion) FROM partidas WHERE id_user LIKE '%" + usr + "%'", frmLogin.conn)
        reader = command.ExecuteReader()
        reader.Read()
        lbl3.Text = reader.GetDouble(0).ToString
        reader.Close()

        'Llamar a la funcion que calcula el WinRate
        lbl2.Text = porcentajeAprobados(usr).ToString + " %"

        'Cargar el TopTen de puntuaciones de los usuarios

    End Function


End Class