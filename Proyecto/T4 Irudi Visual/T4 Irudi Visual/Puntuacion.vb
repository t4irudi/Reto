Public Class Puntuacion

    Public frmPrincipal As Principal
    Public frmJuego As Juego


    Private Sub btnVolver_Click(sender As Object, e As EventArgs) Handles btnVolver.Click
        'frmPrincipal = New Principal
        frmPrincipal.Show()
        Me.Close()
    End Sub

    Private Sub Puntuacion_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        lblP1.Text = frmJuego.aciertos.ToString
        lblP2.Text = frmJuego.tiempo.ToString
        lblP3.Text = frmJuego.contComodin.ToString

        'llamar a funcion que calcula la puntuación final y almacenar la partida en la bbdd

    End Sub

End Class