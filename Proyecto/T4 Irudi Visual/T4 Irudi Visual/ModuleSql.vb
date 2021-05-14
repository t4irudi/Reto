Imports System.Data.SqlClient
Imports MySql.Data.MySqlClient

Module ModuleSql

    Public Function conectar() As MySqlConnection
        Dim conn As New MySqlConnection
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


End Module
