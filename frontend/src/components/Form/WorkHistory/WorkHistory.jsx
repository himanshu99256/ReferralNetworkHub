import {formStyles as styles, workHistoryStyles as styles1, FiInfo,FiTrash2, Tooltip} from '../imports'

const WorkHistory = ({
  isDisabled,
  workHistoryFields,
  setWorkHistoryFields,
}) => {
  const addWorkHistoryFields = () => {
    setWorkHistoryFields([
      ...workHistoryFields,
      {
        previousJobTitle: "",
        companyName: "",
        employmentDates: "",
        responsibilitiesAchievements: "",
      },
    ]);
  };

  const removeWorkHistoryField = (index) => {
    const updatedFields = workHistoryFields.filter((_, i) => i !== index);
    setWorkHistoryFields(updatedFields);
  };

  return (
    <div className={styles.workHistory}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <h3>Work History</h3>
          <FiInfo className={styles1.icon} data-tip data-for="info-tooltip" />
        </div>
        {!isDisabled && (
          <div className={styles1.options} onClick={addWorkHistoryFields}>
            <span>Add +</span>
          </div>
        )}
      </div>
      <Tooltip
        anchorSelect={`.${styles1.icon}`}
        place="top"
        id="info-tooltip"
        type="light"
        effect="solid"
      >
        <span className={styles1.tooltipContent}>
          If you have experience, fill in these fields.<br></br>
          If disabled, select 'Experienced' in <br></br>
          Professional Information.
        </span>
      </Tooltip>
      {workHistoryFields?.map((field, index) => (
        <div key={index} className={styles1.workHistoryEntry}>
          <div className={styles1.entryHeader}>
            {index > 0 && <p>Work {index + 1}</p>}
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Previous Job Title"
                className={`${styles.inputField} ${
                  isDisabled ? styles.disabledInput : ""
                }`}
                value={field.previousJobTitle}
                disabled={isDisabled}
                onChange={(e) => {
                  const updatedFields = [...workHistoryFields];
                  updatedFields[index].previousJobTitle = e.target.value;
                  setWorkHistoryFields(updatedFields);
                }}
              />
              <input
                type="text"
                placeholder="Company Name"
                className={`${styles.inputField} ${
                  isDisabled ? styles.disabledInput : ""
                }`}
                value={field.companyName}
                disabled={isDisabled}
                onChange={(e) => {
                  const updatedFields = [...workHistoryFields];
                  updatedFields[index].companyName = e.target.value;
                  setWorkHistoryFields(updatedFields);
                }}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Employment Dates (e.g., Jan 2020 to Dec 2023)"
                className={`${styles.inputField} ${
                  isDisabled ? styles.disabledInput : ""
                }`}
                value={field.employmentDates}
                disabled={isDisabled}
                onChange={(e) => {
                  const updatedFields = [...workHistoryFields];
                  updatedFields[index].employmentDates = e.target.value;
                  setWorkHistoryFields(updatedFields);
                }}
              />
              <input
                type="text"
                placeholder="Responsibilities and Achievements (Optional)"
                className={`${styles.inputField} ${
                  isDisabled ? styles.disabledInput : ""
                }`}
                value={field.responsibilitiesAchievements}
                disabled={isDisabled}
                onChange={(e) => {
                  const updatedFields = [...workHistoryFields];
                  updatedFields[index].responsibilitiesAchievements =
                    e.target.value;
                  setWorkHistoryFields(updatedFields);
                }}
              />
            </div>
            {index > 0 && (
              <div
                className={styles1.deleteIcon}
                onClick={() => removeWorkHistoryField(index)}
              >
                <FiTrash2 />
                <span>Delete</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
