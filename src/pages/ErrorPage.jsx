import "../Error.css"
function ErrorPage() {
    return(
        <div className="errorcontent">
            <button>
            404, PAGE NOT FOUND
            </button>            
            <div className="loaderbox">
                <div class="loader ">
                    <div class="face">
                        <div class="circle"></div>
                    </div>
                    <div class="face">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;