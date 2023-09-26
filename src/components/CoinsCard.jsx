import { Heading, VStack, Text,Image } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';

const CoinsCard = ({id,naam,img,price,symbol,currencySymbol='₹'})=>(
        <Link to = {`/coin/${id}`}>
        <VStack w={'52'} p={'8'} shadow={'lg'} borderRadius={"lg"} transition={'all 0.3s'} m={'4'}
        css = {{
            '&:hover':{
                transform : 'scale(1.1)'
            }
        }}
        >
            <Image src = {img} w = {'10'} h ={'10'} objectFit = {'contain'} alt = {'Exchange'}/>
            <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
            <Text noOfLines={1}>{naam}</Text>
            <Text noOfLines={1}>{price?`${currencySymbol}${price}`:'NA'}</Text>
        </VStack>
    </Link>
);

export default CoinsCard;