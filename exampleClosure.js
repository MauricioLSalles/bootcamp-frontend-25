function makeFunc () {

    let name = "Mozilla";
    
    function displayName() {
        console.log(name);
    }
    
    function changeName(nam) {
        name = nam
    }
    
  return {displayName, changeName};

}

const func = makeFunc();

func.displayName();
func.changeName("Godzilla");
func.displayName();