import { useMemo, useState } from "react";
import { toast, Toaster } from "sonner";
import {
  useDeleteAdminAdmissionMutation,
  useGetAdminAdmissionsQuery,
  useUpdateAdminAdmissionStatusMutation,
} from "../state/adminApis/adminAdmissionApis";
import { Loader2, RefreshCcw, Search, ShieldCheck, Trash2 } from "lucide-react";

const statusOptions = ["", "pending", "in-review", "accepted", "rejected"];

const AdminAdmissions = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const queryArgs = useMemo(
    () => ({ page, limit: 15, status, search }),
    [page, status, search],
  );

  const { data, isFetching, refetch } = useGetAdminAdmissionsQuery(queryArgs, {
    refetchOnMountOrArgChange: true,
  });
  const [updateStatus, { isLoading: isUpdatingStatus }] =
    useUpdateAdminAdmissionStatusMutation();
  const [deleteAdmission, { isLoading: isDeleting }] =
    useDeleteAdminAdmissionMutation();

  const items = data?.items || [];
  const pagination = data?.pagination || { page: 1, totalPages: 1, total: 0 };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  };

  const handleStatusChange = async (id, nextStatus) => {
    try {
      await updateStatus({ id, status: nextStatus }).unwrap();
      toast.success("Admission status updated");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this admission record? This action cannot be undone.",
    );
    if (!confirmed) return;
    try {
      await deleteAdmission(id).unwrap();
      toast.success("Admission deleted");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete admission");
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.08),_transparent_35%)] px-4 pb-12 pt-10">
      <Toaster richColors position="top-center" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <ShieldCheck className="h-4 w-4" />
              Admin Panel
            </div>
            <h1 className="mt-2 text-3xl font-bold text-secondary">
              Student Admissions
            </h1>
            <p className="text-sm text-muted-foreground">
              Review, verify, update status, and manage student admission forms.
            </p>
          </div>
          <button
            type="button"
            onClick={refetch}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <RefreshCcw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap gap-3">
            <form onSubmit={onSearchSubmit} className="flex flex-1 items-center gap-2">
              <div className="relative w-full max-w-lg">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder="Search by name, email, city, country..."
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Search
              </button>
            </form>

            <select
              value={status}
              onChange={(event) => {
                setPage(1);
                setStatus(event.target.value);
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
            >
              {statusOptions.map((item) => (
                <option key={item || "all"} value={item}>
                  {item ? item : "All statuses"}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Courses</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((admission) => (
                  <tr key={admission._id} className="align-top">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-secondary">
                        {admission.fullName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {admission.email}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p>{admission.contactNumber || "--"}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p>{admission.city || "--"}</p>
                      <p className="text-xs text-muted-foreground">
                        {admission.country || "--"}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p>
                        {admission.selectedCourses?.length || 0} selected
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={admission.status || "pending"}
                        onChange={(event) =>
                          handleStatusChange(admission._id, event.target.value)
                        }
                        disabled={isUpdatingStatus}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs capitalize outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                      >
                        {statusOptions
                          .filter(Boolean)
                          .map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(admission._id)}
                        disabled={isDeleting}
                        className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:opacity-60"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {!isFetching && items.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-10 text-center text-sm text-muted-foreground"
                    >
                      No admissions found for the current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {(isFetching || isUpdatingStatus || isDeleting) && (
            <div className="flex items-center justify-center gap-2 border-t border-slate-100 bg-slate-50 py-3 text-xs text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing...
            </div>
          )}
        </section>

        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
          <p className="text-muted-foreground">Total: {pagination.total || 0}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-xs text-muted-foreground">
              Page {pagination.page || 1} / {pagination.totalPages || 1}
            </span>
            <button
              type="button"
              disabled={(pagination.page || 1) >= (pagination.totalPages || 1)}
              onClick={() => setPage((prev) => prev + 1)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAdmissions;

