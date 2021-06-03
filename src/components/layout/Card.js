const Card = () => {
    return (
        <div className='border shadow bg-white py-4 custom_card'>
            <form className='form-group card-form text-center px-5'>
                <h5 className='mt-2 mb-4'>Choose your destination</h5>
                <div className='row'>
                    <div className='col-sm-6 mb-3'>
                        <label className='my-1 text-muted'>Origin</label>
                        <select className='form-control form-control-sm px-3 text-muted'>
                            <option>Departure Terminal</option>
                            <option>Abuja</option>
                            <option>Anambra</option>
                            <option>Delta</option>
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div className='col-sm-6 mb-3'>
                        <label className='my-1 text-muted'>Destination</label>
                        <select className='form-control form-control-sm px-3 text-muted'>
                            <option>Arrival Terminal</option>
                            <option>Abuja</option>
                            <option>Anambra</option>
                            <option>Delta</option>
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div className='col-md-4 col-6 mb-3'>
                        <label>Departure date</label>
                        <input type='date' className='form-control' />
                    </div>
                    <div className='col-md-4 col-6 mb-3'>
                        <label>Arrival date</label>
                        <input type='date' className='form-control' />
                    </div>
                    <div className='col-md-4 col-sm-12 mb-3'>
                        <label>Passengers</label>
                        <select className='form-control'>
                            <option>Passengers</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                    </div>
                </div>
                <button className='col-12 my-3 btn btn-block btn-red'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default Card;
