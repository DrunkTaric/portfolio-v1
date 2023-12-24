import { Text } from 'react-font'
import { Progress } from "@nextui-org/progress"

export default function Skill(props: {name: string, precent: number}) {
	return (
		<div className="flex w-full h-fit">
	 		<Text family="Viga" className="w-[25%] text-3xl text-green-500">{ props.name }</Text>
			<Progress aria-label="Loading..." size="lg" value={props.precent} className="mt-auto mb-auto ml-3 w-[75%]"/>
		</div>
	)
}
