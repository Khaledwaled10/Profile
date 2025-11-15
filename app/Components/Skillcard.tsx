interface SkillCardProps {
skill: string;
}


export default function SkillCard({ skill }: SkillCardProps) {
return (
<div className="bg-white p-4 rounded-2xl shadow text-center font-medium">
{skill}
</div>
);
}