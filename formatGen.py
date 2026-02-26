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

opt=int(input("option:\n   1) single item\n   2) prewrited array [8xN]"))
if opt=1:
    a =0
else:
    