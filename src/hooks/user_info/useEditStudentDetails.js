import { useEffect, useState, useCallback } from "react";
import {
  useUpdateMutation,
  useGetAdmissionsQuery,
} from "../../state/userApis/admissionApis";

export const useEditStudentDetails = () => {
  const [saveLoading, setSaveLoading] = useState(false);
  const {
    data,
    refetch,
    isLoading: admissionDetailsLoading,
  } = useGetAdmissionsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [update] = useUpdateMutation();
  const studentDetails =
    Array.isArray(data) && data.length > 0 ? data[0] : null;

  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [editableFields, setEditableFields] = useState({});

  // Initialize userDetails when studentDetails is available
  useEffect(() => {
    if (studentDetails) {
      setUserDetails({
        fullName: studentDetails.fullName || "",
        email: studentDetails.email || "",
        contactNumber: studentDetails.contactNumber || "",
        dob: studentDetails.dob || "",
        address: studentDetails.address || "",
        zipCode: studentDetails.zipCode || "",
        city: studentDetails.city || "",
        state: studentDetails.state || "",
        country: studentDetails.country || "",
        gender: studentDetails.gender || "",
        selectedCourses: studentDetails.selectedCourses || [],
      });

      // Initialize editable fields as false
      setEditableFields(
        Object.keys(studentDetails).reduce(
          (acc, key) => ({ ...acc, [key]: false }),
          {}
        )
      );
    }
  }, [studentDetails]);

  // Handle field edit mode
  const handleEdit = useCallback((field) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  }, []);

  // Handle input change
  const handleChange = useCallback((e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  // Handle save
  const handleSave = useCallback(
    async (field, value) => {
      setSaveLoading(true);
      if (!value) {
        setError(`${field} cannot be empty`);
        return;
      }

      try {
        const response = await update({ [field]: value });
        console.log("Update successful:", response);
        setEditableFields((prev) => ({ ...prev, [field]: false }));
        refetch();
        setSaveLoading(false);
      } catch (error) {
        console.error("Update error:", error);
        setError("Failed to update. Please try again.");
        setSaveLoading(false);
      }
    },
    [update, refetch]
  );

  // Handle cancel (reset to original fetched data)
  const handleCancel = useCallback(
    (field) => {
      setEditableFields((prev) => ({ ...prev, [field]: false }));
      setUserDetails((prev) => ({
        ...prev,
        [field]: studentDetails ? studentDetails[field] : prev[field],
      }));
    },
    [studentDetails]
  );

  return {
    userDetails,
    editableFields,
    handleEdit,
    handleChange,
    handleSave,
    handleCancel,
    studentDetails,
    error,
    admissionDetailsLoading,
    saveLoading,
  };
};
