# El documento detexto debe terminar en 
# A	A	A	A	A	A	A	A	A
# Perdón por la jarcodeada jajajja

database=[]
converted=[]

with open('C:/Users/prisc/Documents/GitHub/MusicBunker/scripts/links.txt', encoding="utf-8") as f:
    for line in f:
        l = (line.split(','))
        database.append(l)

for i in database:
    # converted.append([artist,albums])
    a = i[0].replace("'","").replace("[","").replace("]","")
    b = i[1].replace("'","").replace("[","").replace("]","")
    c = i[-2].replace("'","").replace("[","").replace("]","")
    d = a+", "+b+"\n"+c+"\n"
    # print(d)
    # print(c)
    with open('C:/Users/prisc/Documents/GitHub/MusicBunker/scripts/converted.txt', 'a') as f:
        f.write(d)

# database[i][0]    1                                   2   3   4   5   6   7   8
# Akira Yamaoka	    Silent Hill (Original Soundtrack)	1	2	2	2	1	2	156

