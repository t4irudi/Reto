<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Principal
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Principal))
        Me.lblBienvenida = New System.Windows.Forms.Label()
        Me.btnJugar = New System.Windows.Forms.Button()
        Me.btnReglas = New System.Windows.Forms.Button()
        Me.lblPunt = New System.Windows.Forms.Label()
        Me.lblTotal = New System.Windows.Forms.Label()
        Me.lblWin = New System.Windows.Forms.Label()
        Me.btnVolver = New System.Windows.Forms.Button()
        Me.lstTop = New System.Windows.Forms.ListBox()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.pnlOpciones = New System.Windows.Forms.Panel()
        Me.rb2 = New System.Windows.Forms.RadioButton()
        Me.rb1 = New System.Windows.Forms.RadioButton()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.lbl3 = New System.Windows.Forms.Label()
        Me.lbl2 = New System.Windows.Forms.Label()
        Me.lbl1 = New System.Windows.Forms.Label()
        Me.pnlOpciones.SuspendLayout()
        Me.SuspendLayout()
        '
        'lblBienvenida
        '
        Me.lblBienvenida.BackColor = System.Drawing.Color.Transparent
        Me.lblBienvenida.Font = New System.Drawing.Font("Viner Hand ITC", 20.25!, CType((System.Drawing.FontStyle.Bold Or System.Drawing.FontStyle.Underline), System.Drawing.FontStyle), System.Drawing.GraphicsUnit.Point)
        Me.lblBienvenida.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lblBienvenida.Location = New System.Drawing.Point(25, 27)
        Me.lblBienvenida.Name = "lblBienvenida"
        Me.lblBienvenida.Size = New System.Drawing.Size(380, 48)
        Me.lblBienvenida.TabIndex = 0
        Me.lblBienvenida.Text = "Bienvenid@"
        '
        'btnJugar
        '
        Me.btnJugar.BackColor = System.Drawing.Color.Azure
        Me.btnJugar.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnJugar.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnJugar.FlatAppearance.BorderSize = 3
        Me.btnJugar.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnJugar.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnJugar.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnJugar.ForeColor = System.Drawing.SystemColors.Highlight
        Me.btnJugar.Image = CType(resources.GetObject("btnJugar.Image"), System.Drawing.Image)
        Me.btnJugar.Location = New System.Drawing.Point(190, 371)
        Me.btnJugar.Name = "btnJugar"
        Me.btnJugar.Size = New System.Drawing.Size(117, 53)
        Me.btnJugar.TabIndex = 6
        Me.btnJugar.UseVisualStyleBackColor = False
        '
        'btnReglas
        '
        Me.btnReglas.BackColor = System.Drawing.Color.Azure
        Me.btnReglas.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnReglas.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnReglas.FlatAppearance.BorderSize = 3
        Me.btnReglas.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnReglas.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnReglas.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnReglas.ForeColor = System.Drawing.SystemColors.Highlight
        Me.btnReglas.Location = New System.Drawing.Point(25, 335)
        Me.btnReglas.Name = "btnReglas"
        Me.btnReglas.Size = New System.Drawing.Size(117, 53)
        Me.btnReglas.TabIndex = 7
        Me.btnReglas.Text = "Reglas"
        Me.btnReglas.UseVisualStyleBackColor = False
        '
        'lblPunt
        '
        Me.lblPunt.BackColor = System.Drawing.Color.Transparent
        Me.lblPunt.Font = New System.Drawing.Font("Viner Hand ITC", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblPunt.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lblPunt.Location = New System.Drawing.Point(25, 259)
        Me.lblPunt.Name = "lblPunt"
        Me.lblPunt.Size = New System.Drawing.Size(216, 48)
        Me.lblPunt.TabIndex = 9
        Me.lblPunt.Text = "Tu mejor puntuación: "
        '
        'lblTotal
        '
        Me.lblTotal.BackColor = System.Drawing.Color.Transparent
        Me.lblTotal.Font = New System.Drawing.Font("Viner Hand ITC", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblTotal.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lblTotal.Location = New System.Drawing.Point(25, 107)
        Me.lblTotal.Name = "lblTotal"
        Me.lblTotal.Size = New System.Drawing.Size(227, 48)
        Me.lblTotal.TabIndex = 10
        Me.lblTotal.Text = "Total partidas jugadas:"
        '
        'lblWin
        '
        Me.lblWin.BackColor = System.Drawing.Color.Transparent
        Me.lblWin.Font = New System.Drawing.Font("Viner Hand ITC", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.lblWin.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lblWin.Location = New System.Drawing.Point(25, 184)
        Me.lblWin.Name = "lblWin"
        Me.lblWin.Size = New System.Drawing.Size(145, 48)
        Me.lblWin.TabIndex = 11
        Me.lblWin.Text = "% de aprobados:"
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
        Me.btnVolver.Location = New System.Drawing.Point(25, 416)
        Me.btnVolver.Name = "btnVolver"
        Me.btnVolver.Size = New System.Drawing.Size(117, 52)
        Me.btnVolver.TabIndex = 12
        Me.btnVolver.Text = "Volver"
        Me.btnVolver.UseVisualStyleBackColor = False
        '
        'lstTop
        '
        Me.lstTop.FormattingEnabled = True
        Me.lstTop.ItemHeight = 15
        Me.lstTop.Location = New System.Drawing.Point(425, 78)
        Me.lstTop.Name = "lstTop"
        Me.lstTop.Size = New System.Drawing.Size(106, 199)
        Me.lstTop.TabIndex = 14
        '
        'Label4
        '
        Me.Label4.BackColor = System.Drawing.Color.Transparent
        Me.Label4.Font = New System.Drawing.Font("Viner Hand ITC", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.Label4.ForeColor = System.Drawing.Color.DodgerBlue
        Me.Label4.Location = New System.Drawing.Point(425, 26)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(106, 48)
        Me.Label4.TabIndex = 15
        Me.Label4.Text = "Top Ten"
        Me.Label4.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'pnlOpciones
        '
        Me.pnlOpciones.BackColor = System.Drawing.Color.Transparent
        Me.pnlOpciones.Controls.Add(Me.rb2)
        Me.pnlOpciones.Controls.Add(Me.rb1)
        Me.pnlOpciones.Location = New System.Drawing.Point(327, 359)
        Me.pnlOpciones.Name = "pnlOpciones"
        Me.pnlOpciones.Size = New System.Drawing.Size(204, 86)
        Me.pnlOpciones.TabIndex = 16
        '
        'rb2
        '
        Me.rb2.AutoSize = True
        Me.rb2.BackColor = System.Drawing.Color.Transparent
        Me.rb2.ForeColor = System.Drawing.Color.DodgerBlue
        Me.rb2.Location = New System.Drawing.Point(11, 50)
        Me.rb2.Name = "rb2"
        Me.rb2.Size = New System.Drawing.Size(135, 19)
        Me.rb2.TabIndex = 1
        Me.rb2.Text = "Otro tema por elegir "
        Me.rb2.UseVisualStyleBackColor = False
        '
        'rb1
        '
        Me.rb1.AutoSize = True
        Me.rb1.BackColor = System.Drawing.Color.Transparent
        Me.rb1.Checked = True
        Me.rb1.ForeColor = System.Drawing.Color.DodgerBlue
        Me.rb1.Location = New System.Drawing.Point(11, 16)
        Me.rb1.Name = "rb1"
        Me.rb1.Size = New System.Drawing.Size(180, 19)
        Me.rb1.TabIndex = 0
        Me.rb1.TabStop = True
        Me.rb1.Text = "Prevención Riesgos Laborales"
        Me.rb1.UseVisualStyleBackColor = False
        '
        'Label5
        '
        Me.Label5.BackColor = System.Drawing.Color.Transparent
        Me.Label5.Font = New System.Drawing.Font("Viner Hand ITC", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.Label5.ForeColor = System.Drawing.Color.DodgerBlue
        Me.Label5.Location = New System.Drawing.Point(327, 308)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(204, 48)
        Me.Label5.TabIndex = 17
        Me.Label5.Text = "Selecciona el tema"
        Me.Label5.TextAlign = System.Drawing.ContentAlignment.BottomCenter
        '
        'lbl3
        '
        Me.lbl3.BackColor = System.Drawing.Color.Transparent
        Me.lbl3.Font = New System.Drawing.Font("Viner Hand ITC", 26.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl3.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lbl3.Location = New System.Drawing.Point(232, 243)
        Me.lbl3.Name = "lbl3"
        Me.lbl3.Size = New System.Drawing.Size(109, 48)
        Me.lbl3.TabIndex = 18
        Me.lbl3.Text = "WinRate: "
        '
        'lbl2
        '
        Me.lbl2.BackColor = System.Drawing.Color.Transparent
        Me.lbl2.Font = New System.Drawing.Font("Viner Hand ITC", 26.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl2.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lbl2.Location = New System.Drawing.Point(176, 168)
        Me.lbl2.Name = "lbl2"
        Me.lbl2.Size = New System.Drawing.Size(109, 48)
        Me.lbl2.TabIndex = 19
        Me.lbl2.Text = "WinRate: "
        '
        'lbl1
        '
        Me.lbl1.BackColor = System.Drawing.Color.Transparent
        Me.lbl1.Font = New System.Drawing.Font("Viner Hand ITC", 26.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.lbl1.ForeColor = System.Drawing.Color.DodgerBlue
        Me.lbl1.Location = New System.Drawing.Point(247, 91)
        Me.lbl1.Name = "lbl1"
        Me.lbl1.Size = New System.Drawing.Size(109, 48)
        Me.lbl1.TabIndex = 20
        Me.lbl1.Text = "WinRate: "
        '
        'Principal
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackgroundImage = CType(resources.GetObject("$this.BackgroundImage"), System.Drawing.Image)
        Me.ClientSize = New System.Drawing.Size(543, 480)
        Me.Controls.Add(Me.lbl1)
        Me.Controls.Add(Me.lbl2)
        Me.Controls.Add(Me.lbl3)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.pnlOpciones)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.lstTop)
        Me.Controls.Add(Me.btnVolver)
        Me.Controls.Add(Me.lblWin)
        Me.Controls.Add(Me.lblTotal)
        Me.Controls.Add(Me.lblPunt)
        Me.Controls.Add(Me.btnReglas)
        Me.Controls.Add(Me.btnJugar)
        Me.Controls.Add(Me.lblBienvenida)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "Principal"
        Me.Text = "Principal"
        Me.pnlOpciones.ResumeLayout(False)
        Me.pnlOpciones.PerformLayout()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents lblBienvenida As Label
    Friend WithEvents btnJugar As Button
    Friend WithEvents btnReglas As Button
    Friend WithEvents lblPunt As Label
    Friend WithEvents lblTotal As Label
    Friend WithEvents lblWin As Label
    Friend WithEvents btnVolver As Button
    Friend WithEvents lstTop As ListBox
    Friend WithEvents Label4 As Label
    Friend WithEvents pnlOpciones As Panel
    Friend WithEvents rb2 As RadioButton
    Friend WithEvents rb1 As RadioButton
    Friend WithEvents Label5 As Label
    Friend WithEvents lbl3 As Label
    Friend WithEvents lbl2 As Label
    Friend WithEvents lbl1 As Label
End Class
