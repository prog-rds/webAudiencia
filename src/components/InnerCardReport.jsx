const InnerCardReport = ({ userStudy, ads, interactions }) => {
	const grids = ['', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12'];
	const starts = ['', 'col-start-1', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7', 'col-start-8', 'col-start-9', 'col-start-10', 'col-start-11', 'col-start-12'];
	const ends = ['', 'col-end-1', 'col-end-2', 'col-end-3', 'col-end-4', 'col-end-5', 'col-end-6', 'col-end-7', 'col-end-8', 'col-end-9', 'col-end-10', 'col-end-11', 'col-end-12'];
	return (
		<div className={`test grid grid-rows-6 ${grids[ads.length]}`}>
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
				ads.map((ad, j) => (
					<div key={j} className={`p-2 border border-black text-center col-start-${j + 1} col-end-${j + 2}`}>{interactions[j] ? interactions[j].ViewTime : 'N/A'}</div>
				))
			}

			{
				ads.map((a, i) => (
					<span key={i} className={`p-2 border border-black text-center col-start-${i + 1} col-end-${i + 2}`}>{a.AdEntryTime}</span>
				))
			}

			{
				ads.map((ad, j) => (
					<span key={j} className={`p-2 border border-black text-center col-start-${j + 1} col-end-${j + 2}`}>{interactions[j] ? interactions[j].WasSkipped : 'N/A'}</span>
				))
			}

		</div>
	);
};

export default InnerCardReport;
