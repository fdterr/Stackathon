# Rick Terry Stackathon - Win Expectancy Calculator / Grapher (Automated?)

## Setup

Very simple setup, simply run:
```npm install```

## RetroSheet Downloader

To download the Retrosheet files needed to create the database, cd into the retrosheet-downloader (downloader created by [Matt Dennewitz](https://github.com/mattdennewitz/retrosheet-downloader)

After building the downloader file [(instructions here)](https://github.com/mattdennewitz/retrosheet-downloader)

From the retrosheet-downloader directory run:
```
mkdir all_data
./rs -start=[startYear;min=1921] -w=[#workers here, recommend 5] -out=all_data
```

For example:
```
./rs -start=1921 -w=5 -out=all_data #all_data can be whatever directory, but must exist
```