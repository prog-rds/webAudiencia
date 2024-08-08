const InnerCardReport = ({ userStudy, ads, interactions }) => {
	return (
		<div className='grid'>

			<div className={`grid grid-cols-${ads.length}`}>
				{
					ads.map((a, i) => (
						<span key={i} className='p-2 border border-black text-center'>Publicidad{` ${i + 1}`}</span>
					))
				}
			</div>
			<div className='p-2 text-center border border-black'>
				{userStudy.StudyDate}
			</div>
			<div className='p-2 text-center border border-black'>
				{userStudy.StudyTime}
			</div>
			<div className={`grid grid-cols-${ads.length}`}>
				{
					interactions.map((i, j) => (
						<span key={j} className='p-2 border border-black text-center'>{i.ViewTime}</span>
					))
				}
			</div>
			<div className={`grid grid-cols-${ads.length}`}>
				{
					ads.map((a, i) => (
						<span key={i} className='p-2 border border-black text-center'>{a.AdEntryTime}</span>
					))
				}
			</div>
			<div className={`grid grid-cols-${ads.length}`}>
				{
					interactions.map((i, j) => (
						<span key={j} className='p-2 border border-black text-center'>{i.WasSkipped}</span>
					))
				}
			</div>
		</div>
	);
};

export default InnerCardReport;
