<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Puntuacion
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Puntuacion))
        Me.lblAciertos = New System.Windows.Forms.Label()
        Me.lblTiempo = New System.Windows.Forms.Label()
        Me.lblComodin = New System.Windows.Forms.Label()
        Me.lblP1 = New System.Windows.Forms.Label()
        Me.lblP3 = New System.Windows.Forms.Label()
        Me.lblP2 = New System.Windows.Forms.Label()
        Me.lblNombre = New System.Windows.Forms.Label()
        Me.lblFinal = New System.Windows.Forms.Label()
        Me.lblPFinal = New System.Windows.Forms.Label()
        Me.btnVolver = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblAciertos
        '
        Me.lblAciertos.BackColor = System.Drawing.Color.Transparent
        Me.lblAciertos.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblAciertos.ForeColor = System.Drawing.Color.Black
        Me.lblAciertos.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblAciertos.Location = New System.Drawing.Point(12, 82)
        Me.lblAciertos.Name = "lblAciertos"
        Me.lblAciertos.Size = New System.Drawing.Size(369, 53)
        Me.lblAciertos.TabIndex = 21
        Me.lblAciertos.Text = "Número de preguntas acertadas: "
        Me.lblAciertos.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'lblTiempo
        '
        Me.lblTiempo.BackColor = System.Drawing.Color.Transparent
        Me.lblTiempo.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblTiempo.ForeColor = System.Drawing.Color.Black
        Me.lblTiempo.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblTiempo.Location = New System.Drawing.Point(12, 152)
        Me.lblTiempo.Name = "lblTiempo"
        Me.lblTiempo.Size = New System.Drawing.Size(305, 53)
        Me.lblTiempo.TabIndex = 22
        Me.lblTiempo.Text = "Tiempo que te ha sobrado: "
        Me.lblTiempo.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'lblComodin
        '
        Me.lblComodin.BackColor = System.Drawing.Color.Transparent
        Me.lblComodin.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblComodin.ForeColor = System.Drawing.Color.Black
        Me.lblComodin.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblComodin.Location = New System.Drawing.Point(12, 226)
        Me.lblComodin.Name = "lblComodin"
        Me.lblComodin.Size = New System.Drawing.Size(295, 53)
        Me.lblComodin.TabIndex = 23
        Me.lblComodin.Text = "Comodines usados: "
        Me.lblComodin.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'lblP1
        '
        Me.lblP1.BackColor = System.Drawing.Color.Transparent
        Me.lblP1.Font = New System.Drawing.Font("Viner Hand ITC", 27.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblP1.ForeColor = System.Drawing.Color.Black
        Me.lblP1.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblP1.Location = New System.Drawing.Point(387, 78)
        Me.lblP1.Name = "lblP1"
        Me.lblP1.Size = New System.Drawing.Size(97, 53)
        Me.lblP1.TabIndex = 24
        Me.lblP1.Text = "0"
        Me.lblP1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblP3
        '
        Me.lblP3.BackColor = System.Drawing.Color.Transparent
        Me.lblP3.Font = New System.Drawing.Font("Viner Hand ITC", 27.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblP3.ForeColor = System.Drawing.Color.Black
        Me.lblP3.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblP3.Location = New System.Drawing.Point(387, 217)
        Me.lblP3.Name = "lblP3"
        Me.lblP3.Size = New System.Drawing.Size(97, 53)
        Me.lblP3.TabIndex = 25
        Me.lblP3.Text = "0"
        Me.lblP3.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblP2
        '
        Me.lblP2.BackColor = System.Drawing.Color.Transparent
        Me.lblP2.Font = New System.Drawing.Font("Viner Hand ITC", 27.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblP2.ForeColor = System.Drawing.Color.Black
        Me.lblP2.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblP2.Location = New System.Drawing.Point(387, 148)
        Me.lblP2.Name = "lblP2"
        Me.lblP2.Size = New System.Drawing.Size(97, 53)
        Me.lblP2.TabIndex = 26
        Me.lblP2.Text = "0"
        Me.lblP2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblNombre
        '
        Me.lblNombre.BackColor = System.Drawing.Color.Transparent
        Me.lblNombre.Font = New System.Drawing.Font("Viner Hand ITC", 36.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lblNombre.ForeColor = System.Drawing.Color.Black
        Me.lblNombre.Location = New System.Drawing.Point(90, 9)
        Me.lblNombre.Name = "lblNombre"
        Me.lblNombre.Size = New System.Drawing.Size(330, 69)
        Me.lblNombre.TabIndex = 27
        Me.lblNombre.Text = "Tu"
        Me.lblNombre.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'lblFinal
        '
        Me.lblFinal.BackColor = System.Drawing.Color.Transparent
        Me.lblFinal.Font = New System.Drawing.Font("Viner Hand ITC", 21.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lblFinal.ForeColor = System.Drawing.Color.Black
        Me.lblFinal.Location = New System.Drawing.Point(12, 340)
        Me.lblFinal.Name = "lblFinal"
        Me.lblFinal.Size = New System.Drawing.Size(295, 69)
        Me.lblFinal.TabIndex = 28
        Me.lblFinal.Text = "Puntuación Final: "
        Me.lblFinal.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'lblPFinal
        '
        Me.lblPFinal.BackColor = System.Drawing.Color.Transparent
        Me.lblPFinal.Font = New System.Drawing.Font("Viner Hand ITC", 36.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblPFinal.ForeColor = System.Drawing.Color.Black
        Me.lblPFinal.ImageAlign = System.Drawing.ContentAlignment.TopLeft
        Me.lblPFinal.Location = New System.Drawing.Point(387, 340)
        Me.lblPFinal.Name = "lblPFinal"
        Me.lblPFinal.Size = New System.Drawing.Size(97, 53)
        Me.lblPFinal.TabIndex = 29
        Me.lblPFinal.Text = "0"
        Me.lblPFinal.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'btnVolver
        '
        Me.btnVolver.BackColor = System.Drawing.Color.Azure
        Me.btnVolver.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnVolver.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnVolver.FlatAppearance.BorderSize = 3
        Me.btnVolver.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnVolver.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnVolver.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnVolver.ForeColor = System.Drawing.SystemColors.Highlight
        Me.btnVolver.Location = New System.Drawing.Point(200, 404)
        Me.btnVolver.Name = "btnVolver"
        Me.btnVolver.Size = New System.Drawing.Size(117, 52)
        Me.btnVolver.TabIndex = 30
        Me.btnVolver.Text = "Volver"
        Me.btnVolver.UseVisualStyleBackColor = False
        '
        'Puntuacion
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackgroundImage = CType(resources.GetObject("$this.BackgroundImage"), System.Drawing.Image)
        Me.ClientSize = New System.Drawing.Size(513, 468)
        Me.Controls.Add(Me.btnVolver)
        Me.Controls.Add(Me.lblPFinal)
        Me.Controls.Add(Me.lblFinal)
        Me.Controls.Add(Me.lblNombre)
        Me.Controls.Add(Me.lblP2)
        Me.Controls.Add(Me.lblP3)
        Me.Controls.Add(Me.lblP1)
        Me.Controls.Add(Me.lblComodin)
        Me.Controls.Add(Me.lblTiempo)
        Me.Controls.Add(Me.lblAciertos)
        Me.Name = "Puntuacion"
        Me.Text = "Puntuacion"
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents lblAciertos As Label
    Friend WithEvents lblTiempo As Label
    Friend WithEvents lblComodin As Label
    Friend WithEvents lblP1 As Label
    Friend WithEvents lblP3 As Label
    Friend WithEvents lblP2 As Label
    Friend WithEvents lblNombre As Label
    Friend WithEvents lblFinal As Label
    Friend WithEvents lblPFinal As Label
    Friend WithEvents btnVolver As Button
End Class
