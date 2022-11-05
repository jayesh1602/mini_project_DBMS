import { useEffect } from "react";

const ViewData = () => {
  
 useEffect(() => {
   const res = null;
 }, [])
 

  return (
    <div className="viewdata-main">
        
      <form class="addform ">
        <h2 class="mb-2">Student Information</h2>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Full Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              value="jayesh patil"
              class="form-control"
              id="inputEmail3"
              placeholder="name"
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            mobile
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            age
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Roll No.
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            prn
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            class
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            division
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ViewData;
