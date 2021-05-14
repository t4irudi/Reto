Public Class Juego

    Public frmPrincipal As Principal
    Public frmPuntuacion As Puntuacion


    Dim tiempo2 As Integer = 30

    Dim acierto As Boolean = True
    Dim indexPregunta As Integer = 0
    Dim arrayP(9) As Label
    Dim arrayJuego(9) As Integer

    Public tiempo As Integer = 300
    Public contComodin = 0
    Public aciertos As Integer = 0

    Private Sub Juego_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        cargarP()

        ActivarRespuestas(False)
        btnSiguiente.Visible = False
        lblPregunta.Visible = False
        lblAcierto.Visible = False
        btnPausar.Visible = False
        btn50.Visible = False

        pbImagen.SizeMode = PictureBoxSizeMode.StretchImage

    End Sub

    Private Sub btnSalir_Click(sender As Object, e As EventArgs) Handles btnSalir.Click
        'si el cuestionario no ha terminado, preguntar si quiere
        'salir y avisarle de que no se guardara la partida
        If indexPregunta = 9 Then
            frmPuntuacion = New Puntuacion
            frmPuntuacion.frmJuego = Me
            frmPuntuacion.Show()
        Else
            frmPrincipal.Show()
        End If
        Me.Hide()
    End Sub



    Private Sub btnPausar_Click(sender As Object, e As EventArgs) Handles btnPausar.Click

        If btnPausar.Text = "Reanudar" Then
            Timer1.Start()
            lblR1.Enabled = True
            lblR2.Enabled = True
            lblR3.Enabled = True
            lblR4.Enabled = True
            btnPausar.Text = "Pausar"
        Else
            Timer1.Stop()
            lblR1.Enabled = False
            lblR2.Enabled = False
            lblR3.Enabled = False
            lblR4.Enabled = False
            btnPausar.Text = "Reanudar"
        End If
    End Sub


    Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles Timer1.Tick
        'configuramos el tiempo total y el tiempo por pregunta
        tiempo = tiempo - 1
        tiempo2 = tiempo2 - 1

        If tiempo2 < 10 Then
            lblTiempoPregunta.Text = (tiempo2 \ 60) & " : 0" & (tiempo2 Mod 60)
        Else
            lblTiempoPregunta.Text = (tiempo2 \ 60) & " : " & (tiempo2 Mod 60)
        End If

        If tiempo Mod 60 < 10 Then
            lbltiempoTotal.Text = (tiempo \ 60) & " : 0" & (tiempo Mod 60)
        Else
            lbltiempoTotal.Text = (tiempo \ 60) & " : " & (tiempo Mod 60)
        End If

        If tiempo2 = 27 Then
            pbImagen.Visible = False
            lblPregunta.Visible = True
            ActivarRespuestas(True)

        End If

        If tiempo = 0 Then
            'el juego se termina
        Else
            If tiempo2 = 0 Then
                btnSiguiente.Visible = True
                tiempo2 = 30
                Timer1.Stop()
                'mostrar la respuesta correcta
            End If
        End If
    End Sub



    Private Sub btnComenzar_Click(sender As Object, e As EventArgs) Handles btnComenzar.Click
        Timer1.Start()

        btnComenzar.Visible = False

        pbImagen.Visible = True
        btnPausar.Visible = True
        btn50.Visible = True
        lblC.Visible = True
        lblComodin.Visible = True

        numerosAleatorios()
        cargarPreguntas()


    End Sub


    Private Sub btnSiguiente_Click(sender As Object, e As EventArgs) Handles btnSiguiente.Click
        btnSiguiente.Visible = False
        lblAcierto.Visible = False
        lblExplicación.Visible = False
        btn50.Enabled = True


        btnPausar.Visible = True
        pbImagen.Visible = True

        If contComodin < 3 Then
            btn50.Enabled = True
        Else
            btn50.Enabled = False
        End If

        lblR1.Enabled = True
        lblR2.Enabled = True
        lblR3.Enabled = True
        lblR4.Enabled = True

        ActivarRespuestas(False)
        tiempo2 = 30
        indexPregunta += 1
        cargarPreguntas()
        'MessageBox.Show(indexPregunta)
        Timer1.Start()
    End Sub

    'FUNCIONES

    Private Sub cargarP()
        arrayP(0) = lbl1
        arrayP(1) = lbl2
        arrayP(2) = lbl3
        arrayP(3) = lbl4
        arrayP(4) = lbl5
        arrayP(5) = lbl6
        arrayP(6) = lbl7
        arrayP(7) = lbl8
        arrayP(8) = lbl9
        arrayP(9) = lbl10
    End Sub

    Private Sub ActivarRespuestas(act As Boolean)
        lblR1.Visible = act
        lblR2.Visible = act
        lblR3.Visible = act
        lblR4.Visible = act
    End Sub

    Public Function ComprobarAcierto(respuesta As String)
        'MessageBox.Show(respuesta + " <-- lo que llega  |||  la que es correcta--> " + getRespuesta(arrayJuego(indexPregunta)))
        'MessageBox.Show("indexPregunta: " + indexPregunta.ToString + " --> " + getPregunta(arrayJuego(indexPregunta)))
        If respuesta = getRespuesta(arrayJuego(indexPregunta)) Then
            acierto = True
        Else
            acierto = False
        End If

        Return acierto
    End Function


    'al clickar en estos botones se comprueba si se ha acertado
    Private Sub lblR1_Click(sender As Object, e As EventArgs) Handles lblR1.Click
        Timer1.Stop()
        lblR1.Enabled = False
        lblR2.Enabled = False
        lblR3.Enabled = False
        lblR4.Enabled = False
        btnPausar.Visible = False
        btn50.Enabled = False
        If ComprobarAcierto("a") Then

            lblAcierto.ForeColor = Color.Green
            lblAcierto.Text = "Correcto"
            lblAcierto.Visible = True
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifVerde.gif")
            btnSiguiente.Visible = True
            aciertos += 1
        Else
            lblAcierto.ForeColor = Color.Red
            lblAcierto.Text = "Incorrecto"
            lblAcierto.Visible = True
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifRojo2.gif")
            lblExplicación.Visible = True
            btnSiguiente.Visible = True

        End If

        If indexPregunta = 9 Then
            btnSiguiente.Visible = False
            btnSalir.Text = "Terminar"
        End If

    End Sub

    Private Sub lblR2_Click(sender As Object, e As EventArgs) Handles lblR2.Click
        Timer1.Stop()
        lblR1.Enabled = False
        lblR2.Enabled = False
        lblR3.Enabled = False
        lblR4.Enabled = False
        btnPausar.Visible = False
        btn50.Enabled = False
        If ComprobarAcierto("b") Then

            lblAcierto.ForeColor = Color.Green
            lblAcierto.Text = "Correcto"
            lblAcierto.Visible = True
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifVerde.gif")
            btnSiguiente.Visible = True
            aciertos += 1
        Else
            lblAcierto.ForeColor = Color.Red
            lblAcierto.Text = "Incorrecto"
            lblAcierto.Visible = True
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifRojo2.gif")
            lblExplicación.Visible = True
            btnSiguiente.Visible = True

        End If

        If indexPregunta = 9 Then
            btnSiguiente.Visible = False
            btnSalir.Text = "Terminar"
        End If

    End Sub

    Private Sub lblR3_Click(sender As Object, e As EventArgs) Handles lblR3.Click
        Timer1.Stop()
        lblR1.Enabled = False
        lblR2.Enabled = False
        lblR3.Enabled = False
        lblR4.Enabled = False
        btnPausar.Visible = False
        btn50.Enabled = False
        If ComprobarAcierto("c") Then

            lblAcierto.ForeColor = Color.Green
            lblAcierto.Text = "Correcto"
            lblAcierto.Visible = True
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifVerde.gif")
            btnSiguiente.Visible = True
            aciertos += 1
        Else
            lblAcierto.ForeColor = Color.Red
            lblAcierto.Text = "Incorrecto"
            lblAcierto.Visible = True
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifRojo2.gif")
            lblExplicación.Visible = True
            btnSiguiente.Visible = True

        End If

        If indexPregunta = 9 Then
            btnSiguiente.Visible = False
            btnSalir.Text = "Terminar"
        End If

    End Sub
    Private Sub lblR4_Click(sender As Object, e As EventArgs) Handles lblR4.Click
        Timer1.Stop()
        lblR1.Enabled = False
        lblR2.Enabled = False
        lblR3.Enabled = False
        lblR4.Enabled = False
        btnPausar.Visible = False
        btn50.Enabled = False
        If ComprobarAcierto("d") Then

            lblAcierto.ForeColor = Color.Green
            lblAcierto.Text = "Correcto"
            lblAcierto.Visible = True
            'arrayP(indexPregunta).BackColor() = Color.Green
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifVerde.gif")
            btnSiguiente.Visible = True
            aciertos += 1
        Else
            lblAcierto.ForeColor = Color.Red
            lblAcierto.Text = "Incorrecto"
            lblAcierto.Visible = True
            'arrayP(indexPregunta).BackColor() = Color.Red
            arrayP(indexPregunta).Image = Image.FromFile("C:\Users\dam1-jonpu\Desktop\Reto 5\Visual\Proyecto\T4 Irudi Visual\T4 Irudi Visual\img\gifRojo2.gif")
            lblExplicación.Visible = True
            btnSiguiente.Visible = True

        End If

        If indexPregunta = 9 Then
            btnSiguiente.Visible = False
            btnSalir.Text = "Terminar"
        End If
    End Sub


    'Funcion que saca los 10 numeros aleatorios
    Public Sub numerosAleatorios()
        'MessageBox.Show("dentro de numerosAleatorios")
        Dim i, x As Integer
        Dim arrNumbers(9) As Integer

        Dim repetido As Boolean
        Randomize()

        For i = 1 To 10 'genero solo 10 numeros aleatorios
            repetido = False
            'MessageBox.Show("dentro del primer for " + i.ToString)

            x = Int(Rnd() * 10) + 0 'genero numeros aleatorios entre 0 y 9
            arrNumbers(i - 1) = x
            While repetido = False
                For j = 0 To i - 1 'checar cada elemento del arreglo para buscar numero repetido
                    'MessageBox.Show("dentro del segundo for " + i.ToString + " " + j.ToString)
                    If i > 1 Then
                        If x = arrNumbers(j) Then
                            repetido = False
                            x = Int(Rnd() * 10) + 0 'genero numeros aleatorios entre 0 y 9
                            j = -1
                        ElseIf j = i - 1 Then
                            arrNumbers(i - 1) = x
                            repetido = True
                        End If
                    Else
                        repetido = True
                    End If
                Next j
            End While
            arrNumbers(i - 1) = x
        Next i
        Dim prueba As String
        For i = 0 To arrNumbers.Length - 1
            arrayJuego(i) = arrNumbers(i)
        Next i

        'esto es una prueba para ver los numeros aleatorios que salen
        For i = 0 To arrayJuego.Length - 1
            prueba = arrayJuego(i).ToString + " " + prueba
        Next i
        MessageBox.Show(prueba)
    End Sub

    Public Sub cargarPreguntas()

        lblPregunta.Text = getPregunta(arrayJuego(indexPregunta))

        lblR1.Text = getR_a(arrayJuego(indexPregunta))
        lblR2.Text = getR_b(arrayJuego(indexPregunta))
        lblR3.Text = getR_c(arrayJuego(indexPregunta))
        lblR4.Text = getR_d(arrayJuego(indexPregunta))

        lblExplicación.Text = getExplicacion(arrayJuego(indexPregunta))

        'cargar la imagen

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles btn50.Click
        btn50.Enabled = False
        contComodin += 1
        lblComodin.Text = (3 - contComodin).ToString
        If ComprobarAcierto("a") Then
            lblR2.Visible = False
            lblR4.Visible = False
        ElseIf ComprobarAcierto("b") Then
            lblR3.Visible = False
            lblR4.Visible = False
        ElseIf ComprobarAcierto("c") Then
            lblR2.Visible = False
            lblR4.Visible = False
        ElseIf ComprobarAcierto("d") Then
            lblR1.Visible = False
            lblR3.Visible = False
        End If
    End Sub
End Class