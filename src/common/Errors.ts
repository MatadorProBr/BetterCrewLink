enum Errors {
	UNSUPPORTED_VERSION = 'Your version of Among Us is unsupported by BetterCrewLink.\n',
	OPEN_AS_ADMINISTRATOR = "Error with checking the process:\nCouldn't connect to Among Us.\nPlease re-open BetterCrewLink as Administrator.",
	LOOKUP_FETCH_ERROR = 'Error with fetching lookups:\nPlease check your internet connection.',
	OFFSETS_FETCH_ERROR = 'Error with fetching offsets:\nPlease check your internet connection.',
	START_MICROPHONE = "Couldn't connect to your microphone:\nNotReadableError: Could not start audio source",
};

export interface ErrorInstance {
	err_message: string;
	err_link?: string;
}

const ErrorList = new Map<string, ErrorInstance>([
	[Errors.UNSUPPORTED_VERSION, {
		err_message: Errors.UNSUPPORTED_VERSION
	}],
	[Errors.OPEN_AS_ADMINISTRATOR, {
		err_message: Errors.OPEN_AS_ADMINISTRATOR
	}],
	[Errors.LOOKUP_FETCH_ERROR, {
		err_message: Errors.LOOKUP_FETCH_ERROR
	}],
	[Errors.OFFSETS_FETCH_ERROR, {
		err_message: Errors.OFFSETS_FETCH_ERROR
	}],
	[Errors.START_MICROPHONE, {
		err_message: Errors.START_MICROPHONE
	}],
]);

//const wiki_base = "https://github.com/OhMyGuus/BetterCrewLink/wiki"
export function stringToError(input_string: string): ErrorInstance {
	if (ErrorList.has(input_string)) {
		return ErrorList.get(input_string)!;
	}
	return {
		err_message: input_string,
	}
}

export default Errors;