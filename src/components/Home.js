import React from "react"

function Home () {
    return(
    <>
            <section className="py-4 py-xl-5" style={{margin: "4rem"}}>
      <div className="container h-100">
        <div
          className="text-dark bg-warning bg-gradient border rounded border-0 p-4 py-5"
          style={{height: "70vh"}}
        >
          <div className="row h-100">
            <div
              className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center"
            >
              <div>
                <h1 className="text-uppercase fw-bold text-dark mb-3">
                  Allie Packard
                </h1>
                <p className="mb-4">
                  Allie is a UI/UX designer located in Miami, FL. She is graduating in May of 2022 with her masters degree in Interactive Media with an emphasis in user experience design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}

export default Home