
class APIs{

   Assert_APIResponseStatusCodeIsCorrect(APIAlias, ExpectedStatusCode)
    {
            cy.get(APIAlias).should((response)=> {
                expect(response.status).to.eq(ExpectedStatusCode);
        }) 
    }

  
   Assert_ResponseBodyContainsValue(APIAlias, Property, value)
    {
        cy.get(APIAlias).should((response)=> {
        expect(response.body).to.have.nested.property(Property, value);
        })
    }

    VerifyResponseBodyJsonBySpecificKey(APIAlias, PropertyArray, json, key, value)
    {
        cy.get(APIAlias).should((response)=> {
            
            const jsonFoundFlag = true

            const responseBodyPropertyArray = response.body[PropertyArray]
            const jsonArrayLenght = response.body[PropertyArray].length

            for(let i = 0; i<jsonArrayLenght; ++i)
           {
               if(responseBodyPropertyArray[i][key] == value)
               {
                    expect(responseBodyPropertyArray[i]).to.deep.equal(json)
                    return true;
               }
           }

           throw new Error('The json does not exist in the response.')

           
        })
    }
}

export const apis = new APIs()