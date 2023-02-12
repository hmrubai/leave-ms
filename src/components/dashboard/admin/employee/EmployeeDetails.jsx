import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  // useEmployeeDetailsByIdQuery,
  useLeaveBalanceListByEmpIdQuery,
} from "../../../../services/employeeApi";
import Loader from "../../../common/Loader";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const res = useEmployeeDetailsByIdQuery(id);
  const empDetailsRes = useLeaveBalanceListByEmpIdQuery(id);

  // console.log(res?.data?.data)

  console.log(empDetailsRes?.data?.data?.balance_list);

  return (
    <>
      {empDetailsRes.isFetching && <Loader />}

      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              Employee Information Details
            </h6>
          </div>
          <div>
            <BsFillArrowLeftCircleFill
              onClick={() => navigate(-1)}
              className="cursor"
              color="black"
              size={20}
            />
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 ">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle "
                  style={{ width: "200px", height: "200px" }}
                  src={`${process.env.REACT_APP_FILE_URL}${empDetailsRes?.data?.data?.image}`}
                  alt=""
                />
              </div>

              <div className="pt-2">
                <div className="p-2 mb-5 text-center">
                  <div className="font-weight-bold text-dark d-inline  rounded">
                    {empDetailsRes?.data?.data?.name}
                  </div>
                  <p>
                    <span className=" shadow-lg p-1 rounded text-primary">
                      {empDetailsRes?.data?.data?.designation}
                    </span>
                  </p>
                </div>
                <p>
                  Email:
                  <span className="font-weight-bold text-primary ">
                    {" "}
                    {empDetailsRes?.data?.data?.email}
                  </span>
                </p>
                <p>
                  Designation:
                  <span className="font-weight-bold text-primary ">
                    {empDetailsRes?.data?.data?.designation}
                  </span>
                </p>

                <p>
                  Number:
                  <span className="font-weight-bold text-primary">
                    {empDetailsRes?.data?.data?.mobile}
                  </span>
                </p>
                <p>
                  Department :
                  <span className="font-weight-bold text-primary">
                    {empDetailsRes?.data?.data?.department}
                  </span>
                </p>


                <p>

                  Key Skills :
                  <span className="font-weight-bold text-primary">
                  {empDetailsRes?.data?.data?.key_skills === 'undefined' ? 'No Description' : <div dangerouslySetInnerHTML={{ __html: empDetailsRes?.data?.data?.key_skills}} />}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row ">
                <h4 className="py-2">Personal Info</h4>
                <div className="col-md-6">
                  <p>
                    Father Name:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.father_name}
                    </span>
                  </p>
                  <p>
                    Fathers Contact Number:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.fathers_contact_number}
                    </span>
                  </p>
                  <p>
                    Mother Name:
                    <span className="font-weight-bold text-primary ">
                      {empDetailsRes?.data?.data?.mother_name}
                    </span>
                  </p>

                  <p>
                    Mothers Contact Numbe:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.mothers_contact_number}
                    </span>
                  </p>
                  <p>
                    Marital Status:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.marital_status}
                    </span>
                  </p>
                  <p>
                    Spouse Name:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.spouse_name}
                    </span>
                  </p>
                  <p>
                    Blood Group:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.blood_group}
                    </span>
                  </p>

                  <p>
                    Referee (office):
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.referee_office}
                    </span>
                  </p>
                  <p>
                    Referee (Relative):
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.referee_relative}
                    </span>
                  </p>
                  <p>
                    Referee Contact Details:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.referee_contact_details}
                    </span>
                  </p>
                  <p>
                    e-TIN:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.e_tin}
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Spouse Number:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.spouse_number}
                    </span>
                  </p>
                  <p>
                    Gender:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.gender}
                    </span>
                  </p>
                  <p>
                    Date of Birth:
                    <span className="font-weight-bold text-primary ">
                      {empDetailsRes?.data?.data?.date_of_birth}
                    </span>
                  </p>

                  <p>
                    NID/Birth ID Number:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.nid}
                    </span>
                  </p>
                  <p>
                    Passport Number :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.passport_number}
                    </span>
                  </p>
                  <p>
                    Institution :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.institution}
                    </span>
                  </p>
                  <p>
                    Education :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.education}
                    </span>
                  </p>
                  <p>
                    Highest Level of Study :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.highest_level_of_study}
                    </span>
                  </p>
                  <p>
                    Applicable Tax Amount :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.applicable_tax_amount}
                    </span>
                  </p>
                  <p>
                    Remarks :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.remarks}
                    </span>
                  </p>
                  <p>
                    Official Achievement :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.official_achievement}
                    </span>
                  </p>
                </div>
              </div>
              <div className="row ">
                <h4 className="py-2 ">Company Info</h4>

                <div className="col-md-6">
                  <p>
                    Office ID Number:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.employee_code}
                    </span>
                  </p>
                  <p>
                    Office e-Mail ID:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.email}
                    </span>
                  </p>
                  <p>
                    Office Number :
                    <span className="font-weight-bold text-primary ">
                      {empDetailsRes?.data?.data?.office_contact_number}
                    </span>
                  </p>

                  <p>
                    Finger Print ID:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.finger_print_id}
                    </span>
                  </p>

                  <p>
                    Joining Date:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.joining_date}
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Company:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.company_name}
                    </span>
                  </p>

                  <p>
                    Designation:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.designation}
                    </span>
                  </p>
                  <p>
                    Branch :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.branch_name}
                    </span>
                  </p>
                  <p>
                    Department :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.department}
                    </span>
                  </p>
                  <p>
                    Employment :
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.employment_type}
                    </span>
                  </p>
                </div>
              </div>
              <div className="row ">
                <h4 className="py-2 ">Address Info</h4>
                <div className="col-md-6">
                  <p>
                    Present Address:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.present_address}
                    </span>
                  </p>
                  <p>
                    Permanent Address :
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.permanent_address}
                    </span>
                  </p>
          
                  <p>
                    Status:
                    <span className="font-weight-bold text-primary">
                      {" "}
                      {empDetailsRes?.data?.data?.is_active === true
                        ? "Active"
                        : "Dactive"}
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Division:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.division_name}
                    </span>
                  </p>

                  <p>
                    District:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.district_name}
                    </span>
                  </p>
                  <p>
                    City:
                    <span className="font-weight-bold text-primary ">
                      {" "}
                      {empDetailsRes?.data?.data?.city_name}
                    </span>
                  </p>

                  <p>
                    Area:
                    <span className="font-weight-bold text-primary">
                      {empDetailsRes?.data?.data?.area_name}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Employee Leave Details
          </h6>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-borderless">
            <thead className="shadow">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Total Balence</th>
                <th scope="col">Availed Days</th>
                <th scope="col">Remaining Days</th>
              </tr>
            </thead>
            <tbody>
              {empDetailsRes?.data?.data?.balance_list.map((item, index) => {
                return (
                  <tr key={index} className="border">
                    <th scope="row">{index + 1}</th>
                    <th>{`${item.leave_title} (${item.leave_short_code})`}</th>
                    <td>
                      <span className="text-primary font-weight-bold">
                        {item.total_days}
                      </span>
                       days
                    </td>

                    <td>
                      <span className="text-danger font-weight-bold">
                        {item.availed_days}
                      </span>
                       days
                    </td>

                    <td>
                      <span className="text-success  font-weight-bold">
                        {item.remaining_days}
                      </span>
                       days
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
