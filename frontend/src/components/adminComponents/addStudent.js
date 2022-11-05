const AddStudent = () => {
  return (
    <div class="addstudent">
      <form class="addform ">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Full Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder="name"
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
              placeholder="Password"
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
              placeholder="e.g 8956895247"
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
              placeholder="e.g 21"
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
              placeholder="e.g 31352"
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
              placeholder="e.g 32134"
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
              placeholder="e.g 10"
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
              id="division"
              placeholder="e.g A"
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
