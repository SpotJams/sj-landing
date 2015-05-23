SpotJams - landing site
-----------------------

This is the SpotJams landing site repository.


### References

[github](https://github.com/verdverm/sj-landing)
[materialize](http://materialize.com)


### Setup

```
# make a spotjams directory in the user's HOME directory
mkdir $HOME/spotjams
cd $HOME/spotjams

# clone the spotjams landing site 
git clone git@github.com:verdverm/sj-landing
cd sj-landing

# setup the spotjams landing site for development
./setup.sh
```


### Running the development version

Watching the assets and automatically compiling:
```
grunt watch
```


Serving the code (in a new terminal):
```
go run local.go
```

Manually compling the assets:
```
grunt
```



### Deployment

Deployment to the actual servers is handled by a different repository which links in this site.