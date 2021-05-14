Imports System.Data.SqlClient
Imports MySql.Data.MySqlClient

Module ModuleSql
    Public frmlogin As Form1
    Dim conn As New MySqlConnection

    Public Function conectar() As MySqlConnection
        'Dim conn As New MySqlConnection
        Dim myConnectionString As String

        myConnectionString = "server=192.168.6.169;" _  '53 root "" prueba, tabla pruebas
            & "uid=almi;" _
            & "pwd=Almi123;" _
            & "database=t4irudi"

        Try
            conn.ConnectionString = myConnectionString
            conn.Open()
            Return conn
            'Dim command As New MySqlCommand("SELECT * FROM users", conn)
            'Dim reader As MySqlDataReader = command.ExecuteReader()
            'Dim dt As New DataTable()
            'dt.Load(reader)

        Catch ex As MySqlException
            MessageBox.Show(ex.Message)
            Return Nothing
        End Try

    End Function

    Public Function puntuacionFinal(aciertos As Integer, segundos As Integer, comodines As Integer)
        Dim pAciertos As Integer
        Dim PTiempo As Integer
        Dim pComodines As Integer

        Dim pFinal As Integer

        pAciertos = aciertos * 1000
        PTiempo = (segundos * 20) + (3 * aciertos)

        If comodines <= 1 Then
            pComodines = 0
        ElseIf comodines = 2 Then
            pComodines = -500
        ElseIf comodines = 3 Then
            pComodines = -1000
        ElseIf comodines = 4 Then
            pComodines = -2000
        End If

        pFinal = pAciertos + PTiempo + pComodines

        Return pFinal
    End Function

    Public Function porcentajeAprobados(id_user As String)
        Dim porcentaje As Double

        'obtener el numero TOTAL de partidas
        Dim command As New MySqlCommand("SELECT COUNT(*) FROM partidas WHERE id_user LIKE '%" + id_user + "%'", conn)
        Dim reader As MySqlDataReader = command.ExecuteReader()
        reader.Read()
        Dim totalPartidas = reader.GetInt32(0).ToString
        reader.Close()

        'obtener el numero de partidas APROBADAS
        command = New MySqlCommand("SELECT COUNT(*) FROM partidas WHERE id_user LIKE '%" + id_user + "%' and puntuacion >= 800", conn)
        reader = command.ExecuteReader()
        reader.Read()
        Dim partidasAprobadas = reader.GetInt32(0).ToString
        MessageBox.Show(partidasAprobadas.ToString)
        reader.Close()

        porcentaje = (partidasAprobadas / totalPartidas) * 100

        Return porcentaje
    End Function


End Module
