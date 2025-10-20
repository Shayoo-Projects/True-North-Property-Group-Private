import React from 'react';
import TonyProfileImg from '../../media/tony_Profile.jpg';
import BrandonProfileImg from '../../media/brandon_profile.jpg';

const TeamSection: React.FC = () => {
    const teamMembers = [
        { name: "Tony Smith", title: "Licensed in Virginia, Maryland, and Washington, D.C., and is a certified military relocation professional", imageUrl: TonyProfileImg },
        { name: "Brandon Smith", title: "Licensed in Virginia and is a member of the National Association of Realtors and Northern Virginia Association of Realtors.", imageUrl: BrandonProfileImg },
    ];
    return (
        <section className="py-20 bg-tn-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet the Team</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        The dedicated professionals guiding our mission.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 max-w-3xl mx-auto">
                    {teamMembers.map(member => (
                         <div key={member.name} className="text-center">
                            <img className="mx-auto h-48 w-48 rounded-full object-cover" src={member.imageUrl} alt={member.name} />
                            <h3 className="mt-6 text-xl font-bold text-tn-primary">{member.name}</h3>
                            <p className="mt-1 text-gray-600 text-sm max-w-xs mx-auto">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
