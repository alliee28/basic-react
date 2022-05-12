import React from "react"

function About () {
    return(
    <>
            <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>About Me</h2>
          <p className="w-lg-50">
            Learn a little about me!
          </p>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col">
          <div className="card">
            <img
              className="card-img-top w-100 d-block fit-cover"
              style={{height: "200px"}}
              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            />
            <div className="card-body p-4">
              <p className="text-warning card-text mb-0">Hometown</p>
              <h4 className="card-title">Dassel, Minnesota</h4>
              <p className="card-text">
                I grew up in Dassel, Minnesota until I moved to Iowa for undergrad in 2016.
              </p>
              <div className="d-flex">
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <p className="text-warning card-text mb-0">Sport</p>
              <h4 className="card-title">Cheerleading</h4>
              <p className="card-text">
                I have been in high school cheer, college cheer, and now I cheer for a non-profit team. We perform at events to raise money in South Florida.
              </p>
              <div className="d-flex">
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <p className="text-warning card-text mb-0">Current Job</p>
              <h4 className="card-title">User Experience Designer at Motorola Solutions</h4>
              <p className="card-text">
                I work on police evidence collection applications. These applications allow police officers and evidence managers to search evidence and add to incidents for external reasons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default About