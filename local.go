package main

import (
	"fmt"
	"net/http"
)

func main() {

	var (
		dir  = "www"
		port = "8080"

		welcome = `
open your browser to:  http://localhost:8080

documentation:
    https://github.com/verdverm/sj-landing
    http://materializecss.com/
    
use 'ctrl+c' to exit
		`
	)

	fmt.Println(welcome)

	h := http.FileServer(http.Dir(dir))
	http.ListenAndServe("0.0.0.0:"+port, h)

}
