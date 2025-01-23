import { useState } from "react";
import { logs } from "../data/mockLogs";

const Logs = () => {
  const [expandedLogId, setExpandedLogId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 10;

  const sortedLogs = logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const toggleExpand = (id) => {
    setExpandedLogId(expandedLogId === id ? null : id);
  };

  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = sortedLogs.slice(indexOfFirstLog, indexOfLastLog);

  const totalPages = Math.ceil(logs.length / logsPerPage);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-green-800">Logs</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-green-600 underline"
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-green-600 underline"
          >
            Next
          </button>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {currentLogs.map((log) => (
          <li key={log.id} className="p-2 bg-green-100 border border-green-300 rounded-lg">
            <strong className="block text-green-800">{log.timestamp}</strong>
            <p>{log.message}</p>
            <button
              onClick={() => toggleExpand(log.id)}
              className="text-green-600 underline mt-2"
            >
              {expandedLogId === log.id ? "Hide Details" : "Show Details"}
            </button>
            {expandedLogId === log.id && (
              <p className="mt-2 text-green-700">{log.details}</p>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-green-600 underline"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="text-green-600 underline"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Logs;