import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useBranchSaveOrUpdateMutation } from "../../../../services/branchApi";
import { useGetCompanyListQuery } from "../../../../services/companyApi";
import { useGetLeavePolicyListQuery } from "../../../../services/leavepolicyApi";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
const CreateApplyForLeave = ({ handleClose }) => {
  const { data } = useGetLeavePolicyListQuery();
  const [branchSaveOrUpdate, res] = useBranchSaveOrUpdateMutation();

  const [renge, setRenge] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  // console.log(renge[0].startDate);
  // console.log(renge[0].endDate);

  const formik = useFormik({
    initialValues: {
      leave_policy_id: "",
      is_half_day: false,
      half_day: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        let data;

        if (values.is_half_day === false) {
          
          data = {
            leave_policy_id: values.leave_policy_id,
            is_half_day: values.is_half_day,
            half_day: values.half_day,
            start_date: format(renge[0].startDate, "yyyy-MM-dd"),
            end_date: format(renge[0].endDate, "yyyy-MM-dd"),
          };

        }

        console.log(data);

        // const result = await branchSaveOrUpdate(values).unwrap();

        // toast.success(result.message);
        resetForm();
      } catch (error) {
        toast.warn(error.data.message);
      }
    },
  });

  if (res.isSuccess) {
    handleClose();
  }

  return (
    <>
      <ToastContainer />
      <div className="card-body">
        <form className="form-sample" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">leave Policy</label>
                <div className="col-sm-6">
                  <select
                    className="form-control form-select"
                    name="leave_policy_id"
                    onChange={formik.handleChange}
                    value={formik.values.leave_policy_id}
                  >
                    <option>Selact Policy</option>
                    {data?.data?.map((leave, i) => (
                      <option key={i} value={leave.id}>
                        {leave.leave_title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Leave Date</label>
                <div className="col-sm-6">
                  <DateRange
                    onChange={(item) => setRenge([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={renge}
                    direction="horizontal"
                    className="PreviewArea"
                    disabledDates={[
                      {
                        before: new Date(),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Is Half Day</label>
                <div className="col-sm-6">
                  <div class="form-check form-switch mt-2">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Is Half Day"
                      name="is_half_day"
                      onChange={formik.handleChange}
                      value={formik.values.is_half_day}
                      checked={formik.values.is_half_day}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                formik.values.is_half_day ? "d-block col-md-12" : "d-none"
              }
            >
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Half Day</label>
                <div className="col-sm-6">
                  <select
                    className="form-control form-select"
                    name="half_day"
                    onChange={formik.handleChange}
                    value={formik.values.half_day}
                  >
                    <option> --- Selact --- </option>
                    <option value="1st Half">First Half</option>
                    <option value="2nd Half">Second Half</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Modal.Footer>
            <div className=" d-flex">
              <div className="mr-5">
                <Button type="submit" variant="success">
                  Submit
                </Button>
              </div>
              <div>
                <Button variant="dark" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </form>
      </div>
    </>
  );
};

export default CreateApplyForLeave;
