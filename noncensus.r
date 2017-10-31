install_github('ramhiser/noncensus')
library(noncensus)
data(states)
write.csv(states, "states.csv")
data(zip_codes)
write.csv(zip_codes, "zip_codes.csv")


## us <- map_data('state')

## ggplot(fm,aes(longitude,latitude)) +
##   geom_polygon(data=us,aes(x=long,y=lat,group=group),color='gray',fill=NA,alpha=.35)+
##   geom_point(aes(color = count),size=.15,alpha=.25) +
##   xlim(-125,-65)+ylim(20,50)
