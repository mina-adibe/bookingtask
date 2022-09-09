import { useEffect, useState } from "react";
import { axiosInstance } from "../network/apis";

const useDoctorInfo = () => {
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const booking = async () => {
      setLoading(true);
      return await axiosInstance
        .get("/", { signal: abortController.signal })
        .then((res) => {
          console.log(typeof JSON.parse(res.data));
          if (res.status === 200) {
            setDoctorInfo(JSON.parse(res.data));
          }
        })
        .catch((error) => {
          if (error.name == "AbortError") {
            console.log("request was cancelled");
          }
          seterror(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    booking();
    return () => {
      abortController.abort();
    };
  }, []);
  return [doctorInfo, loading, error];
};

export default useDoctorInfo;
