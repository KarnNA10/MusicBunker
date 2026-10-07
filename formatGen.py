""" 
Generate code for MusicBunker webpage

Enter: 
- band name
- album
- year
- genre
- country
"""

band = ""
album = ""
link=""
year = 1970
genre = []
country = ""
bg_color=""
txt_color=""
  # [band,album,year,country,genre(s),bg_color,txt_color,linkArchive,linkYT],
fullInfoArray=[
    ["Rick Wakeman", "The Six Wives of Henry VIII",1973,"UK","Prog, Instrumental","-","-","https://archive.org/details/rick_wakeman-the_six_wives_of_henry_viii-vinyl-1973#reviews","-"],
    ["Emerson, Lake & Palmer", "Brain Salad Surgery", 0000, "UK", "Prog, Symphonic Rock, Rock, Avant-Garde,", "-", "-", "https://archive.org/details/1979-elp-brain-salad-surgery", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
    ["", "", 19, "", "", "-", "-", "-", "-"],
]

def trans(array):
    with open('content.txt', 'a') as f:
        a="      <tr>"+"        <th>{array[0]}</th>"+f"        <th>{array[1]}</th>"+f"        <th class=\"num\">{array[3]}</th>"+f"        <th>{array[4]}</th>"+f"        <th>{array[5]}</th>"+"      </tr>"
        f.write(a)  

opt=int(input("option:\n   1) single item\n   2) prewrited array [8xN]\n    3) Read from file"))
if opt==1:
    a=0
elif opt==2:
    a=1
else:
    a=3
    
a=input("Programaterminado con exitación")