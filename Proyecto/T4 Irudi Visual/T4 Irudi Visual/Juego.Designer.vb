<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Juego
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.components = New System.ComponentModel.Container()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Juego))
        Me.btnSalir = New System.Windows.Forms.Button()
        Me.lblTituloJuego = New System.Windows.Forms.Label()
        Me.btnComenzar = New System.Windows.Forms.Button()
        Me.lblPregunta = New System.Windows.Forms.Label()
        Me.lblR1 = New System.Windows.Forms.Label()
        Me.lblR2 = New System.Windows.Forms.Label()
        Me.lblR3 = New System.Windows.Forms.Label()
        Me.lblR4 = New System.Windows.Forms.Label()
        Me.btnPausar = New System.Windows.Forms.Button()
        Me.Timer1 = New System.Windows.Forms.Timer(Me.components)
        Me.pbImagen = New System.Windows.Forms.PictureBox()
        Me.lbltiempoTotal = New System.Windows.Forms.Label()
        Me.lblTiempoPregunta = New System.Windows.Forms.Label()
        Me.btnSiguiente = New System.Windows.Forms.Button()
        Me.lblExplicación = New System.Windows.Forms.Label()
        Me.lbl1 = New System.Windows.Forms.Label()
        Me.lbl3 = New System.Windows.Forms.Label()
        Me.lbl4 = New System.Windows.Forms.Label()
        Me.lbl5 = New System.Windows.Forms.Label()
        Me.lbl6 = New System.Windows.Forms.Label()
        Me.lbl7 = New System.Windows.Forms.Label()
        Me.lbl8 = New System.Windows.Forms.Label()
        Me.lbl9 = New System.Windows.Forms.Label()
        Me.lbl10 = New System.Windows.Forms.Label()
        Me.lbl2 = New System.Windows.Forms.Label()
        Me.lblAcierto = New System.Windows.Forms.Label()
        Me.btn50 = New System.Windows.Forms.Button()
        Me.lblC = New System.Windows.Forms.Label()
        Me.lblComodin = New System.Windows.Forms.Label()
        CType(Me.pbImagen, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'btnSalir
        '
        Me.btnSalir.BackColor = System.Drawing.Color.Azure
        Me.btnSalir.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnSalir.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnSalir.FlatAppearance.BorderSize = 3
        Me.btnSalir.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnSalir.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnSalir.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnSalir.ForeColor = System.Drawing.Color.DodgerBlue
        Me.btnSalir.Location = New System.Drawing.Point(625, 562)
        Me.btnSalir.Name = "btnSalir"
        Me.btnSalir.Size = New System.Drawing.Size(135, 54)
        Me.btnSalir.TabIndex = 7
        Me.btnSalir.Text = "Salir"
        Me.btnSalir.UseVisualStyleBackColor = False
        '
        'lblTituloJuego
        '
        Me.lblTituloJuego.BackColor = System.Drawing.Color.Transparent
        Me.lblTituloJuego.Font = New System.Drawing.Font("Viner Hand ITC", 20.25!, CType((System.Drawing.FontStyle.Bold Or System.Drawing.FontStyle.Underline), System.Drawing.FontStyle), System.Drawing.GraphicsUnit.Point)
        Me.lblTituloJuego.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lblTituloJuego.Location = New System.Drawing.Point(267, 18)
        Me.lblTituloJuego.Name = "lblTituloJuego"
        Me.lblTituloJuego.Size = New System.Drawing.Size(251, 48)
        Me.lblTituloJuego.TabIndex = 8
        Me.lblTituloJuego.Text = "Bienvenid@"
        Me.lblTituloJuego.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'btnComenzar
        '
        Me.btnComenzar.BackColor = System.Drawing.Color.Azure
        Me.btnComenzar.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnComenzar.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnComenzar.FlatAppearance.BorderSize = 3
        Me.btnComenzar.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnComenzar.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnComenzar.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnComenzar.ForeColor = System.Drawing.Color.DodgerBlue
        Me.btnComenzar.Location = New System.Drawing.Point(319, 563)
        Me.btnComenzar.Name = "btnComenzar"
        Me.btnComenzar.Size = New System.Drawing.Size(135, 53)
        Me.btnComenzar.TabIndex = 9
        Me.btnComenzar.Text = "Comenzar"
        Me.btnComenzar.UseVisualStyleBackColor = False
        '
        'lblPregunta
        '
        Me.lblPregunta.BackColor = System.Drawing.Color.Transparent
        Me.lblPregunta.Font = New System.Drawing.Font("Viner Hand ITC", 14.25!, System.Drawing.FontStyle.Underline, System.Drawing.GraphicsUnit.Point)
        Me.lblPregunta.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lblPregunta.Location = New System.Drawing.Point(50, 66)
        Me.lblPregunta.Name = "lblPregunta"
        Me.lblPregunta.Size = New System.Drawing.Size(684, 56)
        Me.lblPregunta.TabIndex = 10
        Me.lblPregunta.Text = "Pregunta"
        Me.lblPregunta.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblR1
        '
        Me.lblR1.BackColor = System.Drawing.Color.Brown
        Me.lblR1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lblR1.Cursor = System.Windows.Forms.Cursors.Hand
        Me.lblR1.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lblR1.Font = New System.Drawing.Font("Verdana", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblR1.ForeColor = System.Drawing.SystemColors.Control
        Me.lblR1.Location = New System.Drawing.Point(25, 153)
        Me.lblR1.Name = "lblR1"
        Me.lblR1.Size = New System.Drawing.Size(323, 106)
        Me.lblR1.TabIndex = 11
        Me.lblR1.Text = "Respuesta1"
        Me.lblR1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblR2
        '
        Me.lblR2.BackColor = System.Drawing.Color.Orange
        Me.lblR2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lblR2.Cursor = System.Windows.Forms.Cursors.Hand
        Me.lblR2.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lblR2.Font = New System.Drawing.Font("Verdana", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblR2.ForeColor = System.Drawing.SystemColors.Control
        Me.lblR2.Location = New System.Drawing.Point(437, 153)
        Me.lblR2.Name = "lblR2"
        Me.lblR2.Size = New System.Drawing.Size(323, 106)
        Me.lblR2.TabIndex = 12
        Me.lblR2.Text = "Respuesta2"
        Me.lblR2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblR3
        '
        Me.lblR3.BackColor = System.Drawing.Color.LimeGreen
        Me.lblR3.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lblR3.Cursor = System.Windows.Forms.Cursors.Hand
        Me.lblR3.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lblR3.Font = New System.Drawing.Font("Verdana", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblR3.ForeColor = System.Drawing.SystemColors.Control
        Me.lblR3.Location = New System.Drawing.Point(25, 286)
        Me.lblR3.Name = "lblR3"
        Me.lblR3.Size = New System.Drawing.Size(323, 106)
        Me.lblR3.TabIndex = 13
        Me.lblR3.Text = "Respuesta3"
        Me.lblR3.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblR4
        '
        Me.lblR4.BackColor = System.Drawing.Color.DodgerBlue
        Me.lblR4.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lblR4.Cursor = System.Windows.Forms.Cursors.Hand
        Me.lblR4.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lblR4.Font = New System.Drawing.Font("Verdana", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblR4.ForeColor = System.Drawing.SystemColors.Control
        Me.lblR4.Location = New System.Drawing.Point(437, 286)
        Me.lblR4.Name = "lblR4"
        Me.lblR4.Size = New System.Drawing.Size(323, 106)
        Me.lblR4.TabIndex = 14
        Me.lblR4.Text = "Respuesta4"
        Me.lblR4.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'btnPausar
        '
        Me.btnPausar.BackColor = System.Drawing.Color.Azure
        Me.btnPausar.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPausar.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnPausar.FlatAppearance.BorderSize = 3
        Me.btnPausar.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnPausar.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPausar.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnPausar.ForeColor = System.Drawing.Color.DodgerBlue
        Me.btnPausar.Location = New System.Drawing.Point(25, 405)
        Me.btnPausar.Name = "btnPausar"
        Me.btnPausar.Size = New System.Drawing.Size(135, 53)
        Me.btnPausar.TabIndex = 15
        Me.btnPausar.Text = "Pausar"
        Me.btnPausar.UseVisualStyleBackColor = False
        '
        'Timer1
        '
        Me.Timer1.Interval = 1000
        '
        'pbImagen
        '
        Me.pbImagen.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.pbImagen.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.pbImagen.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.pbImagen.Image = CType(resources.GetObject("pbImagen.Image"), System.Drawing.Image)
        Me.pbImagen.Location = New System.Drawing.Point(187, 136)
        Me.pbImagen.Name = "pbImagen"
        Me.pbImagen.Size = New System.Drawing.Size(395, 323)
        Me.pbImagen.TabIndex = 16
        Me.pbImagen.TabStop = False
        Me.pbImagen.Visible = False
        '
        'lbltiempoTotal
        '
        Me.lbltiempoTotal.BackColor = System.Drawing.Color.Transparent
        Me.lbltiempoTotal.Font = New System.Drawing.Font("Viner Hand ITC", 36.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbltiempoTotal.ForeColor = System.Drawing.Color.Black
        Me.lbltiempoTotal.Location = New System.Drawing.Point(12, 18)
        Me.lbltiempoTotal.Name = "lbltiempoTotal"
        Me.lbltiempoTotal.Size = New System.Drawing.Size(215, 64)
        Me.lbltiempoTotal.TabIndex = 17
        Me.lbltiempoTotal.Text = "5:00"
        Me.lbltiempoTotal.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblTiempoPregunta
        '
        Me.lblTiempoPregunta.BackColor = System.Drawing.Color.Transparent
        Me.lblTiempoPregunta.Font = New System.Drawing.Font("Viner Hand ITC", 36.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lblTiempoPregunta.ForeColor = System.Drawing.Color.Black
        Me.lblTiempoPregunta.Location = New System.Drawing.Point(555, 18)
        Me.lblTiempoPregunta.Name = "lblTiempoPregunta"
        Me.lblTiempoPregunta.Size = New System.Drawing.Size(233, 64)
        Me.lblTiempoPregunta.TabIndex = 18
        Me.lblTiempoPregunta.Text = "0:30"
        Me.lblTiempoPregunta.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'btnSiguiente
        '
        Me.btnSiguiente.BackColor = System.Drawing.Color.Azure
        Me.btnSiguiente.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnSiguiente.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnSiguiente.FlatAppearance.BorderSize = 3
        Me.btnSiguiente.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnSiguiente.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnSiguiente.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnSiguiente.ForeColor = System.Drawing.Color.DodgerBlue
        Me.btnSiguiente.Location = New System.Drawing.Point(319, 562)
        Me.btnSiguiente.Name = "btnSiguiente"
        Me.btnSiguiente.Size = New System.Drawing.Size(135, 54)
        Me.btnSiguiente.TabIndex = 19
        Me.btnSiguiente.Text = "Siguiente"
        Me.btnSiguiente.UseVisualStyleBackColor = False
        '
        'lblExplicación
        '
        Me.lblExplicación.BackColor = System.Drawing.Color.Transparent
        Me.lblExplicación.Font = New System.Drawing.Font("Verdana", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblExplicación.ForeColor = System.Drawing.Color.Black
        Me.lblExplicación.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblExplicación.Location = New System.Drawing.Point(25, 475)
        Me.lblExplicación.Name = "lblExplicación"
        Me.lblExplicación.Size = New System.Drawing.Size(735, 53)
        Me.lblExplicación.TabIndex = 20
        Me.lblExplicación.Text = "Explicación"
        Me.lblExplicación.Visible = False
        '
        'lbl1
        '
        Me.lbl1.BackColor = System.Drawing.Color.White
        Me.lbl1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl1.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl1.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl1.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl1.ForeColor = System.Drawing.Color.Black
        Me.lbl1.Location = New System.Drawing.Point(25, 639)
        Me.lbl1.Name = "lbl1"
        Me.lbl1.Size = New System.Drawing.Size(52, 49)
        Me.lbl1.TabIndex = 21
        Me.lbl1.Text = "1"
        Me.lbl1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl3
        '
        Me.lbl3.BackColor = System.Drawing.Color.White
        Me.lbl3.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl3.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl3.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl3.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl3.ForeColor = System.Drawing.Color.Black
        Me.lbl3.Location = New System.Drawing.Point(177, 639)
        Me.lbl3.Name = "lbl3"
        Me.lbl3.Size = New System.Drawing.Size(52, 49)
        Me.lbl3.TabIndex = 22
        Me.lbl3.Text = "3"
        Me.lbl3.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl4
        '
        Me.lbl4.BackColor = System.Drawing.Color.White
        Me.lbl4.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl4.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl4.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl4.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl4.ForeColor = System.Drawing.Color.Black
        Me.lbl4.Location = New System.Drawing.Point(252, 639)
        Me.lbl4.Name = "lbl4"
        Me.lbl4.Size = New System.Drawing.Size(52, 49)
        Me.lbl4.TabIndex = 23
        Me.lbl4.Text = "4"
        Me.lbl4.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl5
        '
        Me.lbl5.BackColor = System.Drawing.Color.White
        Me.lbl5.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl5.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl5.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl5.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl5.ForeColor = System.Drawing.Color.Black
        Me.lbl5.Location = New System.Drawing.Point(330, 639)
        Me.lbl5.Name = "lbl5"
        Me.lbl5.Size = New System.Drawing.Size(52, 49)
        Me.lbl5.TabIndex = 24
        Me.lbl5.Text = "5"
        Me.lbl5.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl6
        '
        Me.lbl6.BackColor = System.Drawing.Color.White
        Me.lbl6.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl6.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl6.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl6.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl6.ForeColor = System.Drawing.Color.Black
        Me.lbl6.Location = New System.Drawing.Point(407, 639)
        Me.lbl6.Name = "lbl6"
        Me.lbl6.Size = New System.Drawing.Size(52, 49)
        Me.lbl6.TabIndex = 25
        Me.lbl6.Text = "6"
        Me.lbl6.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl7
        '
        Me.lbl7.BackColor = System.Drawing.Color.White
        Me.lbl7.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl7.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl7.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl7.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl7.ForeColor = System.Drawing.Color.Black
        Me.lbl7.Location = New System.Drawing.Point(483, 639)
        Me.lbl7.Name = "lbl7"
        Me.lbl7.Size = New System.Drawing.Size(52, 49)
        Me.lbl7.TabIndex = 26
        Me.lbl7.Text = "7"
        Me.lbl7.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl8
        '
        Me.lbl8.BackColor = System.Drawing.Color.White
        Me.lbl8.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl8.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl8.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl8.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl8.ForeColor = System.Drawing.Color.Black
        Me.lbl8.Location = New System.Drawing.Point(558, 639)
        Me.lbl8.Name = "lbl8"
        Me.lbl8.Size = New System.Drawing.Size(52, 49)
        Me.lbl8.TabIndex = 27
        Me.lbl8.Text = "8"
        Me.lbl8.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl9
        '
        Me.lbl9.BackColor = System.Drawing.Color.White
        Me.lbl9.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl9.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl9.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl9.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl9.ForeColor = System.Drawing.Color.Black
        Me.lbl9.Location = New System.Drawing.Point(633, 639)
        Me.lbl9.Name = "lbl9"
        Me.lbl9.Size = New System.Drawing.Size(52, 49)
        Me.lbl9.TabIndex = 28
        Me.lbl9.Text = "9"
        Me.lbl9.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl10
        '
        Me.lbl10.BackColor = System.Drawing.Color.White
        Me.lbl10.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl10.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl10.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl10.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl10.ForeColor = System.Drawing.Color.Black
        Me.lbl10.Location = New System.Drawing.Point(708, 639)
        Me.lbl10.Name = "lbl10"
        Me.lbl10.Size = New System.Drawing.Size(52, 49)
        Me.lbl10.TabIndex = 29
        Me.lbl10.Text = "10"
        Me.lbl10.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lbl2
        '
        Me.lbl2.BackColor = System.Drawing.Color.White
        Me.lbl2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.lbl2.Cursor = System.Windows.Forms.Cursors.Arrow
        Me.lbl2.FlatStyle = System.Windows.Forms.FlatStyle.Popup
        Me.lbl2.Font = New System.Drawing.Font("Viner Hand ITC", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl2.ForeColor = System.Drawing.Color.Black
        Me.lbl2.Location = New System.Drawing.Point(101, 639)
        Me.lbl2.Name = "lbl2"
        Me.lbl2.Size = New System.Drawing.Size(52, 49)
        Me.lbl2.TabIndex = 30
        Me.lbl2.Text = "2"
        Me.lbl2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblAcierto
        '
        Me.lblAcierto.BackColor = System.Drawing.Color.Transparent
        Me.lblAcierto.Font = New System.Drawing.Font("Viner Hand ITC", 26.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lblAcierto.ForeColor = System.Drawing.Color.Black
        Me.lblAcierto.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblAcierto.Location = New System.Drawing.Point(280, 397)
        Me.lblAcierto.Name = "lblAcierto"
        Me.lblAcierto.Size = New System.Drawing.Size(212, 62)
        Me.lblAcierto.TabIndex = 31
        Me.lblAcierto.Text = "CORRECTO"
        Me.lblAcierto.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        Me.lblAcierto.Visible = False
        '
        'btn50
        '
        Me.btn50.BackColor = System.Drawing.Color.Azure
        Me.btn50.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btn50.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btn50.FlatAppearance.BorderSize = 3
        Me.btn50.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btn50.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btn50.Font = New System.Drawing.Font("Viner Hand ITC", 20.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btn50.ForeColor = System.Drawing.Color.DodgerBlue
        Me.btn50.Location = New System.Drawing.Point(25, 562)
        Me.btn50.Name = "btn50"
        Me.btn50.Size = New System.Drawing.Size(135, 53)
        Me.btn50.TabIndex = 32
        Me.btn50.Text = "50 %"
        Me.btn50.UseVisualStyleBackColor = False
        '
        'lblC
        '
        Me.lblC.BackColor = System.Drawing.Color.Transparent
        Me.lblC.Font = New System.Drawing.Font("Viner Hand ITC", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblC.ForeColor = System.Drawing.Color.Black
        Me.lblC.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblC.Location = New System.Drawing.Point(25, 528)
        Me.lblC.Name = "lblC"
        Me.lblC.Size = New System.Drawing.Size(100, 31)
        Me.lblC.TabIndex = 33
        Me.lblC.Text = "Comodines:"
        Me.lblC.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.lblC.Visible = False
        '
        'lblComodin
        '
        Me.lblComodin.BackColor = System.Drawing.Color.Transparent
        Me.lblComodin.Font = New System.Drawing.Font("Viner Hand ITC", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblComodin.ForeColor = System.Drawing.Color.Black
        Me.lblComodin.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblComodin.Location = New System.Drawing.Point(127, 528)
        Me.lblComodin.Name = "lblComodin"
        Me.lblComodin.Size = New System.Drawing.Size(33, 31)
        Me.lblComodin.TabIndex = 34
        Me.lblComodin.Text = "3"
        Me.lblComodin.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.lblComodin.Visible = False
        '
        'Juego
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackgroundImage = CType(resources.GetObject("$this.BackgroundImage"), System.Drawing.Image)
        Me.ClientSize = New System.Drawing.Size(790, 724)
        Me.Controls.Add(Me.lblComodin)
        Me.Controls.Add(Me.lblC)
        Me.Controls.Add(Me.btn50)
        Me.Controls.Add(Me.lblAcierto)
        Me.Controls.Add(Me.lbl2)
        Me.Controls.Add(Me.lbl10)
        Me.Controls.Add(Me.lbl9)
        Me.Controls.Add(Me.lbl8)
        Me.Controls.Add(Me.lbl7)
        Me.Controls.Add(Me.lbl6)
        Me.Controls.Add(Me.lbl5)
        Me.Controls.Add(Me.lbl4)
        Me.Controls.Add(Me.lbl3)
        Me.Controls.Add(Me.lbl1)
        Me.Controls.Add(Me.lblExplicación)
        Me.Controls.Add(Me.btnSiguiente)
        Me.Controls.Add(Me.lblTiempoPregunta)
        Me.Controls.Add(Me.lbltiempoTotal)
        Me.Controls.Add(Me.pbImagen)
        Me.Controls.Add(Me.btnPausar)
        Me.Controls.Add(Me.lblR4)
        Me.Controls.Add(Me.lblR3)
        Me.Controls.Add(Me.lblR2)
        Me.Controls.Add(Me.lblR1)
        Me.Controls.Add(Me.lblPregunta)
        Me.Controls.Add(Me.btnComenzar)
        Me.Controls.Add(Me.lblTituloJuego)
        Me.Controls.Add(Me.btnSalir)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "Juego"
        Me.Text = "Juego"
        CType(Me.pbImagen, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents btnSalir As Button
    Friend WithEvents lblTituloJuego As Label
    Friend WithEvents btnComenzar As Button
    Friend WithEvents lblPregunta As Label
    Friend WithEvents lblR1 As Label
    Friend WithEvents lblR2 As Label
    Friend WithEvents lblR3 As Label
    Friend WithEvents lblR4 As Label
    Friend WithEvents btnPausar As Button
    Friend WithEvents Timer1 As Timer
    Friend WithEvents pbImagen As PictureBox
    Friend WithEvents lbltiempoTotal As Label
    Friend WithEvents lblTiempoPregunta As Label
    Friend WithEvents btnSiguiente As Button
    Friend WithEvents lblExplicación As Label
    Friend WithEvents lbl1 As Label
    Friend WithEvents lbl3 As Label
    Friend WithEvents lbl4 As Label
    Friend WithEvents lbl5 As Label
    Friend WithEvents lbl6 As Label
    Friend WithEvents lbl7 As Label
    Friend WithEvents lbl8 As Label
    Friend WithEvents lbl9 As Label
    Friend WithEvents lbl10 As Label
    Friend WithEvents lbl2 As Label
    Friend WithEvents lblAcierto As Label
    Friend WithEvents btn50 As Button
    Friend WithEvents lblC As Label
    Friend WithEvents lblComodin As Label
End Class
