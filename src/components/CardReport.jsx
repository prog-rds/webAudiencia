import React from 'react';
import InnerCardReport from './InnerCardReport';

function CardReport ({ userStudy, ads, interactions, isLast }) {
	return (
		<div className='min-w-max'>
			<div className={`flex header-table rounded-t-none ${isLast ? 'rounded-tr-lg' : ''}`}>
				<div className='bg-headerTable text-center p-2 '>
					{userStudy.StudyCode /* MAYBE: cambio por edicion de codigo */}
					-
					{interactions.length}
				</div>
			</div>
			<InnerCardReport userStudy={userStudy} ads={ads} interactions={interactions} />
		</div>
	);
}

export default CardReport;
