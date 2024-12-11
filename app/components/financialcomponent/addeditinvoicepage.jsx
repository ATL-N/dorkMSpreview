import React, { useMemo } from "react";
import {
  FaBook,
  FaMoneyBill,
  FaPlusCircle,
  FaMinusCircle,
  FaSave,
  FaUndo,
} from "react-icons/fa";
import { FaBuildingFlag } from "react-icons/fa6";

const Addeditinvoicepage = ({
  classData,
  semesterData,
  selectedClassId,
  selectedSemesterId,
  handleClassChange,
  handleSemesterChange,
  invoiceItems,
  handleSubmit,
  handleInvoiceChange,
  addInvoiceItem,
  removeInvoiceItem,
  resetForm,
}) => {
  // Calculate total amount
  const totalAmount = useMemo(() => {
    return invoiceItems?.reduce(
      (sum, item) => sum + (parseFloat(item.amount) || 0),
      0
    );
  }, [invoiceItems]);

  return (
    <div className="space-y-6 text-cyan-800">
      <h2 className="text-2xl font-bold text-cyan-700">Enter New Bill(fees)</h2>

      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label
            htmlFor="class-select"
            className="block text-sm font-medium text-cyan-700"
          >
            Select Class
          </label>
          <select
            id="class-select"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-cyan-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
            value={selectedClassId}
            onChange={handleClassChange}
          >
            <option value="">Select a class</option>
            {classData?.map((class_) => (
              <option key={class_.class_id} value={class_.class_id}>
                {class_.class_name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label
            htmlFor="semester-select"
            className="block text-sm font-medium text-cyan-700"
          >
            Select Semester
          </label>
          <select
            id="semester-select"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-cyan-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
            value={selectedSemesterId}
            onChange={handleSemesterChange}
          >
            <option value="">Select a semester</option>
            {semesterData?.map((semester) => (
              <option key={semester.id} value={semester.id}>
                {semester.semester_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedClassId && selectedSemesterId && (
        <div className="bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-cyan-700 text-white">
                    <th className="p-2">Description</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceItems?.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <input
                          type="text"
                          required
                          value={item.description}
                          onChange={(e) =>
                            handleInvoiceChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="e.g Tuition Fee, Transport etc"
                          className="w-full border-2 border-cyan-300 rounded-md p-1"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          required
                          value={item.amount}
                          onChange={(e) =>
                            handleInvoiceChange(index, "amount", e.target.value)
                          }
                          className="w-full border-2 border-cyan-300 rounded-md p-1"
                        />
                      </td>
                      <td className="p-2">
                        <button
                          type="button"
                          onClick={() => removeInvoiceItem(index)}
                          className="text-red-500"
                        >
                          <FaMinusCircle size={"1.3rem"} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Amount Display */}
            <div className="mt-4 text-right">
              <span className="font-bold text-lg">Total Amount: </span>
              <span className="text-xl text-cyan-600">
                GHC {totalAmount?.toFixed(2) || 0}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={addInvoiceItem}
                className="text-cyan-600 flex items-center"
              >
                <FaPlusCircle size={"1.3rem"} className="mr-2" /> Add Bill
                Item
              </button>
              <div className="space-x-4 flex justify-around">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center"
                  onClick={resetForm}
                >
                  <FaUndo className="mr-2" />
                  Reset
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 flex items-center"
                >
                  <FaSave className="mr-2" />
                  Save Bill
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Addeditinvoicepage;