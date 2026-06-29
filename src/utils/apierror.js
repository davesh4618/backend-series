class apierror extends Error {
  constructor(statusCode,message="something went wrong",errors=[],statck="")
  {
    super(message);
    this.statusCode=statusCode;
    this.errors=errors;
    this.statck=statck;
    this.success= false;
    this.data= null;
    this.message=message;

    if(statck){
      this.statck=statck;
    }else{
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default apierror