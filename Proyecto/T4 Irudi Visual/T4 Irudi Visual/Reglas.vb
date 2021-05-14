Public Class Reglas

    Public frmPrincipal As Principal

    Private Sub btnVolver_Click(sender As Object, e As EventArgs) Handles btnVolver.Click
        frmPrincipal.Show()
        Me.Close()
    End Sub
End Class