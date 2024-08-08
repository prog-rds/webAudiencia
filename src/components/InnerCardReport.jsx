const InnerCardReport = ({ userStudy, ads, interactions }) => {
	return (
		<div className={`test grid grid-rows-6 grid-cols-${ads.length}`}>
			{
				ads.map((a, i) => (
					<div key={i} className={`p-2 border border-black text-center col-start-${i + 1} col-end-${i + 2}`}>Publicidad{` ${i + 1}`}</div>
				))
			}
			<div className={`p-2 text-center border border-black col-start-1 col-end-${ads.length + 1}  col-span-${ads.length}`}>
				{userStudy.StudyDate}
			</div>
			<div className={`p-2 text-center border border-black col-start-1 col-end-${ads.length + 1} col-span-${ads.length}`}>
				{userStudy.StudyTime}
			</div>
			{
				interactions.map((i, j) => (
					<div key={j} className={`p-2 border border-black text-center col-start-${i + 1} col-end-${i + 2}`}>{i.ViewTime}</div>
				))
			}

			{
				ads.map((a, i) => (
					<span key={i} className={`p-2 border border-black text-center col-start-${i + 1} col-end-${i + 2}`}>{a.AdEntryTime}</span>
				))
			}

			{
				interactions.map((i, j) => (
					<span key={j} className={`p-2 border border-black text-center col-start-${i + 1} col-end-${i + 2}`}>{i.WasSkipped}</span>
				))
			}

		</div>
	);
};

export default InnerCardReport;
