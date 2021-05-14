Imports System.Net
Imports Newtonsoft.Json
'check git
Module ModuloMongo

    Public Function getPregunta(i As Integer) As String
        Dim web As WebClient = New WebClient()
        Dim json = web.DownloadString("http://192.168.6.169:8080/api/preguntas/fol")
        'MessageBox.Show(i.ToString)
        Dim read = Linq.JArray.Parse(json)
        Return read.Item(i)("pregunta").ToString
    End Function

    Public Function getR_a(i As Integer) As String
        Dim web As WebClient = New WebClient()
        Dim json = web.DownloadString("http://192.168.6.169:8080/api/preguntas/fol")

        Dim read = Linq.JArray.Parse(json)
        Return read.Item(i)("a").ToString
    End Function

    Public Function getR_b(i As Integer) As String
        Dim web As WebClient = New WebClient()
        Dim json = web.DownloadString("http://192.168.6.169:8080/api/preguntas/fol")

        Dim read = Linq.JArray.Parse(json)
        Return read.Item(i)("b").ToString
    End Function

    Public Function getR_c(i As Integer) As String
        Dim web As WebClient = New WebClient()
        Dim json = web.DownloadString("http://192.168.6.169:8080/api/preguntas/fol")

        Dim read = Linq.JArray.Parse(json)
        Return read.Item(i)("c").ToString
    End Function

    Public Function getR_d(i As Integer) As String
        Dim web As WebClient = New WebClient()
        Dim json = web.DownloadString("http://192.168.6.169:8080/api/preguntas/fol")

        Dim read = Linq.JArray.Parse(json)
        Return read.Item(i)("d").ToString
    End Function

    Public Function getExplicacion(i As Integer) As String
        Dim web As WebClient = New WebClient()
        Dim json = web.DownloadString("http://192.168.6.169:8080/api/preguntas/fol")

        Dim read = Linq.JArray.Parse(json)
        Return read.Item(i)("explicacion").ToString
    End Function

    Public Function getRespuesta(i As Integer) As String
        Dim web As WebClient = New WebClient()
        Dim json = web.DownloadString("http://192.168.6.169:8080/api/preguntas/fol")

        Dim read = Linq.JArray.Parse(json)
        Return read.Item(i)("respuesta").ToString
    End Function


End Module
