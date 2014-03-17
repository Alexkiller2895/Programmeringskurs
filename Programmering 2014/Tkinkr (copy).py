# coding=utf-8
import sys
from Tkinter import *
popupper = (len(sys.argv) > 1)

def dialog():
	win = Toplevel()
	Label(win, text='Do you Always Do What You Are told?').pack()
	Button(win, text='Now click this one', command=win.destroy).pack()
	if popupper:
		win.focus_set()
		win.grab_set()
		win.wait_window()
	print('you better obey me...')

root=Tk()
Button(root, text='click me', command=dialog).pack()
root.mainloop()
