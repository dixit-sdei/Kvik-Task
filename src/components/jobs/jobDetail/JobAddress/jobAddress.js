import React from 'react';
import UserImage from '../userImage/userImage';
import './jobAddress.scss';
const JobAdress = (props) => {
  return (
    <div className="job-address d-flex">
      <UserImage />
      <div className="job-user-info flex-fill">
        <h4>
          Rapha Conrad
        </h4>
        <ul>
          <li className="d-flex">
            <span className="svg-secondary-100 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="137.358" height="186.548" viewBox="0 0 137.358 186.548">
                <g id="map-location" transform="translate(0)">
                  <path id="Path_899" data-name="Path 899" d="M306.791,0a68.757,68.757,0,0,0-68.676,68.68,66.993,66.993,0,0,0,6.006,28.034c17.171,37.574,50.093,77.245,59.776,88.507a3.824,3.824,0,0,0,5.792,0c9.679-11.26,42.6-50.929,59.778-88.507a66.964,66.964,0,0,0,6.006-28.034A68.764,68.764,0,0,0,306.791,0Zm0,104.353a35.676,35.676,0,1,1,35.675-35.675A35.716,35.716,0,0,1,306.791,104.353Z" transform="translate(-238.115)" />
                </g>
              </svg>
            </span>
            <p>101, abc point, 7Hull Place, London, E14 6HS, UK</p>
          </li>
          <li className="d-flex">
            <span className="svg-secondary-100 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="15.002" height="16.001" viewBox="0 0 15.002 16.001">
                <path id="Forma_1" data-name="Forma 1" d="M1.375,0A1.413,1.413,0,0,0,0,1.443V12.786a1.414,1.414,0,0,0,1.335,1.433V12.284A1.549,1.549,0,0,1,2.854,10.7h.959a1.557,1.557,0,0,1,1.528,1.58v1.942h4.32V12.284a1.557,1.557,0,0,1,1.528-1.58h.958a1.549,1.549,0,0,1,1.519,1.58v1.936A1.414,1.414,0,0,0,15,12.786V1.443A1.415,1.415,0,0,0,13.627,0Zm.379,8.008V2.149a.608.608,0,0,1,.595-.62H12.627a.608.608,0,0,1,.595.62h0V8.008a.608.608,0,0,1-.594.62H2.349A.608.608,0,0,1,1.754,8.008ZM9.93,2.376a.356.356,0,0,0-.348.363V4.006a.356.356,0,0,0,.348.363h1.215a.356.356,0,0,0,.348-.363V2.739a.356.356,0,0,0-.348-.363Zm-3.037,0a.356.356,0,0,0-.348.363V4.006a.356.356,0,0,0,.348.363H8.109a.356.356,0,0,0,.348-.363V2.739a.356.356,0,0,0-.348-.363Zm-3.037,0a.356.356,0,0,0-.348.363V4.006a.356.356,0,0,0,.348.363H5.071a.356.356,0,0,0,.348-.363V2.739a.356.356,0,0,0-.348-.363ZM9.93,5.543a.356.356,0,0,0-.348.363V7.173a.356.356,0,0,0,.348.363h1.215a.356.356,0,0,0,.348-.363V5.906a.356.356,0,0,0-.348-.363Zm-3.037,0a.356.356,0,0,0-.348.363V7.173a.356.356,0,0,0,.348.363H8.109a.356.356,0,0,0,.348-.363V5.906a.356.356,0,0,0-.348-.363Zm-3.037,0a.356.356,0,0,0-.348.363V7.173a.356.356,0,0,0,.348.363H5.071a.356.356,0,0,0,.348-.363V5.906a.356.356,0,0,0-.348-.363Zm7.321,6.2a.532.532,0,0,0-.521.543v3.173a.532.532,0,0,0,.521.543h.948a.532.532,0,0,0,.521-.543V12.284a.532.532,0,0,0-.521-.543Zm-8.326,0a.532.532,0,0,0-.521.543v3.173A.532.532,0,0,0,2.851,16H3.8a.532.532,0,0,0,.521-.543V12.284a.532.532,0,0,0-.521-.543Z" />
              </svg>
            </span>
            <p>14 Sep 2019</p>
          </li>
          <li className="d-flex">
            <span className="svg-secondary-100 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="23.003" height="23.003" viewBox="0 0 23.003 23.003">
                <path id="Forma_1" data-name="Forma 1" d="M0,11.5A11.5,11.5,0,1,1,11.5,23,11.514,11.514,0,0,1,0,11.5Zm2.447,0A9.054,9.054,0,1,0,11.5,2.446,9.065,9.065,0,0,0,2.445,11.5Zm8.933,1.539a.947.947,0,0,1-.947-.947V4.93a.947.947,0,0,1,1.894,0v6.215h5.168a.947.947,0,1,1,0,1.894Z" transform="translate(0.002 0.002)" />
              </svg>
            </span>
            <p>
              <label>2 Days</label>
              <label>4 Hours</label>
              <label>31 Mins</label>
              <label>26 Secs</label>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobAdress;