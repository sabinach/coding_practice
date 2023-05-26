# From: https://www.pythonguis.com/tutorials/pyqt-basic-widgets/

import sys
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import (
    QMainWindow, 
    QApplication, 
    QLabel
)

class MainWindow(QMainWindow):

    def __init__(self):
        super(MainWindow, self).__init__()

        self.setWindowTitle("My App")

        widget = QLabel("Hello")
        font = widget.font()
        font.setPointSize(30)
        widget.setFont(font)
        widget.setAlignment(Qt.AlignHCenter | Qt.AlignVCenter)

        self.setCentralWidget(widget)

app = QApplication(sys.argv)
w = MainWindow()
w.show()
app.exec()
