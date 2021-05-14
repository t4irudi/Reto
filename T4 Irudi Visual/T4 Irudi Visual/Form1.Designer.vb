<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
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

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Form1))
        Me.PictureBox1 = New System.Windows.Forms.PictureBox()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.txtUsuario = New System.Windows.Forms.TextBox()
        Me.txtContraseña = New System.Windows.Forms.TextBox()
        Me.btnEntrar = New System.Windows.Forms.Button()
        Me.btnSalir = New System.Windows.Forms.Button()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'PictureBox1
        '
        Me.PictureBox1.BackColor = System.Drawing.Color.Transparent
        Me.PictureBox1.BackgroundImage = CType(resources.GetObject("PictureBox1.BackgroundImage"), System.Drawing.Image)
        Me.PictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.PictureBox1.Location = New System.Drawing.Point(1, -8)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(440, 156)
        Me.PictureBox1.TabIndex = 0
        Me.PictureBox1.TabStop = False
        '
        'Label1
        '
        Me.Label1.BackColor = System.Drawing.Color.Transparent
        Me.Label1.Font = New System.Drawing.Font("Viner Hand ITC", 20.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.Label1.ForeColor = System.Drawing.Color.DodgerBlue
        Me.Label1.Location = New System.Drawing.Point(131, 151)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(191, 39)
        Me.Label1.TabIndex = 1
        Me.Label1.Text = "Usuario: "
        Me.Label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'Label2
        '
        Me.Label2.BackColor = System.Drawing.Color.Transparent
        Me.Label2.Font = New System.Drawing.Font("Viner Hand ITC", 20.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.Label2.ForeColor = System.Drawing.Color.DodgerBlue
        Me.Label2.Location = New System.Drawing.Point(131, 239)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(191, 39)
        Me.Label2.TabIndex = 2
        Me.Label2.Text = "Contraseña: "
        Me.Label2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'txtUsuario
        '
        Me.txtUsuario.Location = New System.Drawing.Point(156, 193)
        Me.txtUsuario.Name = "txtUsuario"
        Me.txtUsuario.Size = New System.Drawing.Size(125, 23)
        Me.txtUsuario.TabIndex = 3
        '
        'txtContraseña
        '
        Me.txtContraseña.Location = New System.Drawing.Point(156, 281)
        Me.txtContraseña.Name = "txtContraseña"
        Me.txtContraseña.Size = New System.Drawing.Size(125, 23)
        Me.txtContraseña.TabIndex = 4
        '
        'btnEntrar
        '
        Me.btnEntrar.BackColor = System.Drawing.Color.Azure
        Me.btnEntrar.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnEntrar.FlatAppearance.BorderColor = System.Drawing.Color.DodgerBlue
        Me.btnEntrar.FlatAppearance.BorderSize = 3
        Me.btnEntrar.FlatAppearance.CheckedBackColor = System.Drawing.Color.DodgerBlue
        Me.btnEntrar.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnEntrar.Font = New System.Drawing.Font("Viner Hand ITC", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.btnEntrar.ForeColor = System.Drawing.SystemColors.Highlight
        Me.btnEntrar.Location = New System.Drawing.Point(46, 365)
        Me.btnEntrar.Name = "btnEntrar"
        Me.btnEntrar.Size = New System.Drawing.Size(135, 53)
        Me.btnEntrar.TabIndex = 5
        Me.btnEntrar.Text = "Entrar"
        Me.btnEntrar.UseVisualStyleBackColor = False
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
        Me.btnSalir.Location = New System.Drawing.Point(247, 365)
        Me.btnSalir.Name = "btnSalir"
        Me.btnSalir.Size = New System.Drawing.Size(135, 53)
        Me.btnSalir.TabIndex = 6
        Me.btnSalir.Text = "Salir"
        Me.btnSalir.UseVisualStyleBackColor = False
        '
        'Form1
        '
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None
        Me.BackColor = System.Drawing.Color.White
        Me.BackgroundImage = CType(resources.GetObject("$this.BackgroundImage"), System.Drawing.Image)
        Me.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.ClientSize = New System.Drawing.Size(436, 459)
        Me.Controls.Add(Me.btnSalir)
        Me.Controls.Add(Me.btnEntrar)
        Me.Controls.Add(Me.txtContraseña)
        Me.Controls.Add(Me.txtUsuario)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.PictureBox1)
        Me.Font = New System.Drawing.Font("Segoe UI", 9.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.ForeColor = System.Drawing.Color.Maroon
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "Form1"
        Me.Text = "Login Irudi T4"
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents PictureBox1 As PictureBox
    Friend WithEvents Label1 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents txtUsuario As TextBox
    Friend WithEvents txtContraseña As TextBox
    Friend WithEvents btnEntrar As Button
    Friend WithEvents btnSalir As Button
End Class
