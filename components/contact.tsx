import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "react-font";

export default function Contact(props: { icon: IconProp, text: string }) {
	return (
		<div className="flex">
			<FontAwesomeIcon icon={props.icon} className="text-2xl"/>
			<Text family="Viga" className="text-xl ml-3">{ props.text }</Text>
		</div>
	)
}
