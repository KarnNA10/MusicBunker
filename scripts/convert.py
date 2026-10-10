# El documento detexto debe terminar en 
# A	A	A	A	A	A	A	A	A
# Perdón por la jarcodeada jajajja

database=[]
converted=[]

with open('C:/Users/prisc/Documents/GitHub/MusicBunker/scripts/database.txt', encoding="utf-8") as f:
    for line in f:
        l = (line.split('\t'))
        l[8] = l[8][:-1]
        database.append(l)
    # print(database)

i=0
while database[i]!="\t":
    crrnt = database[i]
    count = 0

    artist = crrnt[0]
    albums = []

    while artist == database[i+count][0]:
        c=database[i+count]
        album = [c[8],c[1],"year","cntry","gnrs","stl[0]","linkArchive","linkYT","",""]
        albums.append(album)
        count+=1

    converted.append([artist,albums])
    with open('C:/Users/prisc/Documents/GitHub/MusicBunker/scripts/converted.txt', 'a') as f:
        f.write(str([artist,albums])+"\n")
    # print([artist,albums])
    # print("\n\n")

    i+=count
    count=0 

# database[i][0]    1                                   2   3   4   5   6   7   8
# Akira Yamaoka	    Silent Hill (Original Soundtrack)	1	2	2	2	1	2	156

